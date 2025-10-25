import jwt from "jsonwebtoken";
import { User } from "../../models/user.modal.js";
import bcrypt from "bcryptjs";
import {
  generateOTP,
  generateResetToken,
  sendEmail,
  decodeToken,
} from "../../lib/helper.js";
import { emailVerifyTemplate } from "../../lib/emailTemplate/verifyEmail.js";
import { resetPasswordTempate } from "../../lib/emailTemplate/resetPassword.js";

export const signUp = async (req, res) => {
  try {
    const { name, username, email, password, confirmPassword, role } = req.body;

    // check required fileds
    if (
      !name &&
      !username &&
      !password &&
      !confirmPassword &&
      !email &&
      !role
    ) {
      return res.status(400).json({
        success: false,
        message: "fields are requried",
      });
    }

    // password and confirm password check
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirm password are different",
      });
    }
    // username exist on db or not
    const isUsernameExist = await User.exists({ username });
    if (isUsernameExist) {
      return res.status(409).json({
        success: false,
        message: "username is already exist",
      });
    }

    // email exist on db or not
    const isEmailExist = await User.exists({ email });
    if (isEmailExist) {
      return res.status(409).json({
        success: false,
        message: "email is already exist",
      });
    }

    const hasPassword = await bcrypt.hash(password, 12); // password hasing
    const otp = generateOTP(6); // generate otp
    const expiresInMinutes = 10; // expire time
    const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000); // added 10 min in current time

    await sendEmail(
      {
        username,
        email,
        otp,
        expiresInMinutes,
        subject: "Verification Mail",
        text: "verification mail",
      },
      emailVerifyTemplate({
        // email template
        username,
        email,
        otp,
        expireAt: expiresInMinutes,
      })
    ); // verification mail and sended otp over the mail

    const addUser = await User.create({
      name,
      username,
      email,
      password: hasPassword,
      role,
      otp,
      otpExpiresAt: expiresAt,
    });

    res.status(201).json({
      success: true,
      data: addUser,
      message: "sign up successfully",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check email or passowrd fields
    if (!email && !password) {
      return res.status(400).json({
        success: false,
        message: "field is requried",
      });
    }

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({
        success: false,
        message: "invalid credential",
      });
    }

    // password compare
    const passowrdCheck = await bcrypt.compare(password, checkUser.password);
    if (!passowrdCheck) {
      return res.status(400).json({
        success: false,
        message: "invalid credential",
      });
    }

    // create accessToken
    const accessToken = jwt.sign(
      {
        id: checkUser._id,
        name: checkUser.name,
        username: checkUser.username,
        email: checkUser.email,
        role: checkUser.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN }
    );

    const refreshToken = jwt.sign(
      {
        id: checkUser._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
      }
    );
    // setup refresh token on cookies
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({
      success: true,
      accessToken,
      data: {
        name: checkUser.name,
        username: checkUser.username,
        email: checkUser.email,
        role: checkUser.role,
      },
      message: "login successfully",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const logout = async (req, res) => {
  try {
    if (!req.cookies.refreshToken) {
      return res.status(400).json({
        success: false,
        message: "cookie is not found",
      });
    }
    res.clearCookie("refreshToken").json({
      success: true,
      message: "logout successfully",
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: "server error",
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (token) {
      jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decode) => {
          if (err) {
            // Wrong Refesh Token
            return res.status(406).json({ message: "Unauthorized" });
          } else {
            const user = await User.findOne({ _id: decode.id });
            const accessToken = jwt.sign(
              {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                role: user.role,
              },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN }
            );

            return res.json({ accessToken });
            console.log(user);
          }
        }
      );
    } else {
      return res.status(406).json({ message: "Unauthorized" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const emailVerified = async (req, res) => {
  try {
    const { otp, email } = req.body;

    if (!otp && !email) {
      return res.status(400).json({
        success: false,
        message: "field is requried",
      });
    }

    const user = await User?.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "invalid email",
      });
    }

    if (user.otpExpiresAt < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "otp is expired",
      });
    }

    if (user?.otp !== Number(otp)) {
      return res.status(400).json({
        success: false,
        message: "otp is invalid",
      });
    }

    // update email verify
    const updatedEmail = await User.findByIdAndUpdate(
      { _id: user._id },
      { isEmailVerified: true, opt: "", otpExpiresAt: "" },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      isEmailVerified: updatedEmail.isEmailVerified,
      message: "email verified",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "email is required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "email not found",
      });
    }

    const { rawToken, hashedToken } = await generateResetToken();

    user.resetPasswordTokenHash = hashedToken; // assing hastoken value and stored in db
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1hr

    await user.save();

    const resetLink = `${
      process.env.CLIENT_ORIGIN
    }/reset-password?token=${encodeURIComponent(rawToken)}`; // reset token url

    // send reset url over the mail
    const htmlContent = await resetPasswordTempate({
      RESET_LINK: resetLink,
      name: user.username,
    }); // email tempalte
    await sendEmail(
      // mail send
      {
        email: user.email,
        subject: "Reset Password",
        text: "RESET PASSWORD",
      },
      htmlContent
    );

    res.status(200).json({
      success: true,
      message: `reset password url send over the ${user.email}`,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.query;
    const { newPassword, confirmPassword } = req.body;

    if (!token && !newPassword && !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "field requried",
      });
    }

    const tokenVerify = decodeToken(token); // token encrypt means match (db token and raw token on url)

    const user = await User.findOne({
      resetPasswordTokenHash: tokenVerify,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Token invalid or expired" });
    }

    const hasPassword = await bcrypt.hash(newPassword, 12); // password hasing
    await User.findByIdAndUpdate(
      { _id: user._id },
      {
        password: hasPassword,
        resetPasswordTokenHash: "",
        resetPasswordExpires: "",
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Password reset successful. Please login.",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const deleteAll = async (req, res) => {
  try {
    await User.deleteMany({});
    return res.status(200).json({
      success: true,
      message: "delete all users",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
