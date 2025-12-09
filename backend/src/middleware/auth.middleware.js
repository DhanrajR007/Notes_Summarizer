import { findUserById } from "../doa/auth.dao.js";
import { NotFoundError, UnauthorizedError } from "../utils/error.js";
import { verifyToken } from "../utils/jsonwebtoken.js";

export const userAuth = async (req, res, next) => {
  const token = req.cookies.accesstoken;
  if (!token) {
    throw new UnauthorizedError("Unauthorized");
  }
  try {
    const decoded = await verifyToken(token);
    const user = await findUserById(decoded.id);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    throw error;
  }
};
