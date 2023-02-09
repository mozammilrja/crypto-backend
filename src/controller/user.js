import User from "../models/user.model.js";

export const updatedUser = async (req, res, next) => {
  console.log(req.params);
  try {
    const updatedUser = await User.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deletedUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!.");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const uploadProfile = async (req, res, next) => {
  const id = req.user;

  if (!req.file) {
    return res
      .status(403)
      .json({ success: false, message: "please slect image" });
  }

  await User.findByIdAndUpdate(id, {
    profilePic: `/uploads/${req.file.filename}`,
  });
  res
    .status(200)
    .json({ success: true, message: "profile picture uploaded succesfully" });
};
