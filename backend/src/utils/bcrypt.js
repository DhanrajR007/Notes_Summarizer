import bcrypt from "bcryptjs";
export const bcryptPassword = (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  } catch (err) {
    throw err;
  }
};
export const comparePassword = async (password, hash) => {
  const isPasswordMatched = await bcrypt.compare(password, hash);
  return isPasswordMatched;
};
