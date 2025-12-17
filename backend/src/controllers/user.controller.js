export const getAllNotes = async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new Error("User not found");
  }
  const notes = await Note.find({ user: user._id });
  return res.status(200).json({
    success: true,
    message: "Notes fetched successfully",
    notes,
  });
};
