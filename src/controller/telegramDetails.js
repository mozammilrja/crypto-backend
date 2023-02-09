import Telegram from '../models/telegram.model.js'


export const createTelegram = async (req, res, next) => {

    const newProgram = new Telegram(req.body);
    try {
     const teleDetails =  await newProgram.save();
      res
        .status(200)
        .json({ success: true, teleDetails });
    } catch (err) {
      next(err)
      res.status(400)
        .json({ success: false, message: "something went wrong" });
    }
  };

  export const updateTelegram = async (req, res, next) => {
  
    try {
      await Telegram.findOneAndUpdate(req.body);
      res
      .status(200)
      .json({ success: true, message: "success" });
  } catch (err) {
    next(err)
    res.status(400)
      .json({ success: false, message: "something went wrong" });
  }
  };
  
  export const getTeleUser = async (req, res, next) => {
    try {
      const teleUser =  await Telegram.findOne(req.body);
      res
      .status(200)
      .json({ success: true, teleUser});
  } catch (err) {
    next(err)
    res.status(500)
      .json({ success: false, message: "something went wrong" });
  }
  };

  export const deletedTelegram  = async (req, res, next) => {
    try {
     const del =   await Telegram.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted!.");
    } catch (err) {
      next(err);
    }
  };