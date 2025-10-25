import jwt from "jsonwebtoken";
import { User } from "../../models/user.modal.js";
import bcrypt from "bcryptjs";
import { generateOTP, sendEmail } from "../../lib/helper.js";
import { emailVerifyTemplate } from "../../lib/emailTemplate/verifyEmail.js";

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

    if (user[0].otp !== Number(otp)) {
      return res.status(400).json({
        success: false,
        message: "otp is invalid",
      });
    }

    // update email verify
    const updatedEmail = await User.findByIdAndUpdate(
      { _id: user[0]._id },
      { isEmailVerified: true },
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
