import { User } from "../../models/user.modal.js";
import bcrypt from "bcryptjs";

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

    const hasPassword = await bcrypt.hash(password, 12);

    const addUser = await User.create({
      name,
      username,
      email,
      password: hasPassword,
      role,
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

    return res.status(200).json({
      success: true,
      message: "login successfully",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};
