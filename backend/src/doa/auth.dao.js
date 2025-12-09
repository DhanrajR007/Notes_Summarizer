import User from "../model/user.model.js";
import { bcryptPassword } from "../utils/bcrypt.js";

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};

export const findUserById = async (id) => {
  const user = await User.findOne({
    _id: id,
  });
  return user;
};

export const createUser = async (email, name, password, imageUrl) => {
  const hashedPassword = await bcryptPassword(password);
  try {
    const user = await User.create({
      email,
      name,
      password: hashedPassword,
      imageUrl: imageUrl,
    });
    return user;
  } catch (err) {
    throw err;
  }
};
