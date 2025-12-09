import jwt from "jsonwebtoken";

export const signToken = (id) => {
  try {
    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return token;
  } catch (err) {
    throw err;
  }
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    throw err;
  }
};
