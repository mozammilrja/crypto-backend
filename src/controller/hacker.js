
import Reports from "./../models/report.model.js"
import uploadaws from "../middlewares/uploadaws.js";

export const UploadReport = async (req, res, next) => {
  // if (!req.file) {
  //   return res
  //     .status(403)
  //     .json({ success: false, message: "please slect image" });
  // }



  try {
    let filepaths = await uploadaws(req.files, req, res)

    Promise.all(filepaths).then( async function (data) {
      if (req.files) {
        req.body.reportFiles = data
        req.body.profileId = req.params.id
      }
      const savedProfile = await Reports.create(req.body);
      res.status(200).json(savedProfile);
    }).catch(function (err) {
      res.send(err.stack);
    }) 
  } catch (err) {
    res.status(402).json({ error: err.message || err });
  }
};