import { uploadImage } from "../database/imagekit.db.js";
import {
  loginUserService,
  registerUserService,
} from "../services/auth.service.js";
import { BadRequestError } from "../utils/error.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("All fields are required");
  }
  try {
    const { user, token } = await loginUserService(email, password);
    res.cookie("accesstoken", token, {
      httpOnly: true,
      secure: false, // true in production (https)
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    throw error;
  }
};
export const register = async (req, res) => {
  const { name, email, password, imageUrl } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("All fields are required");
  }
  try {
    const file = req.file.buffer;
    const response = await uploadImage(file);

    const { user, token } = await registerUserService(
      email,
      name,
      password,
      response || imageUrl
    );
    res.cookie("accesstoken", token, {
      httpOnly: true,
      secure: false, // true in production (https)
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    throw err;
  }
};
