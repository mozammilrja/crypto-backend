import Users from "../models/meta.user.js";



export const metaUsers = async (req, res, next) => {
    try {
      const user = await Users.findOne({ profileId: req.user });
      if (!user) {
        res.status(404).json({
          success: false,
          message: ` No user find  ${req.user}`,
        });
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };