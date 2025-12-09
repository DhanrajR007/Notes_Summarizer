import { createUser, findUserByEmail } from "../doa/auth.dao.js";
import { comparePassword } from "../utils/bcrypt.js";
import { BadRequestError, ConflictError } from "../utils/error.js";
import { signToken } from "../utils/jsonwebtoken.js";

export const registerUserService = async (email, name, password, imageUrl) => {
  const user = await findUserByEmail(email);
  if (user) {
    throw new BadRequestError("User already exists");
  }
  try {
    const user = await createUser(email, name, password, imageUrl);
    const token = await signToken(user._id);
    return { user, token };
  } catch (err) {
    throw err;
  }
};

export const loginUserService = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new BadRequestError("User not Found");
  }
  const isPasswordMatched = await comparePassword(password, user.password);

  if (!isPasswordMatched) {
    throw new ConflictError("Invalid credentials");
  }

  try {
    const token = await signToken(user._id);
    return { user, token };
  } catch (err) {
    throw err;
  }
};
