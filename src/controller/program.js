import Program from "../models/company.program.js";

//create program

export const createProgram = async (req, res, next) => {
  req.body.userId = req.user; // here user coming from token
  const { name } = req.body;
  const existing = await Program.findOne({ name });
  if (existing) {
    return res.status(400).json({ success: false, message: "Program  name already exists!" });
  }
  const newProgram = new Program(req.body);
  try {
    await newProgram.save();
    res
      .status(200)
      .json({ success: true, message: "program added successfully" });
  } catch (err) {
    next(err)
    res.status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

// update program
export const updateProgram = async (req, res, next) => {
  try {
    const updatedProgram = await Program.findByIdAndUpdate(
      req.params.id,
          req.body,
      { new: true }
    );
    console.log(updatedProgram, "updatedProgram");
    if (!updatedProgram) {
      res.status(404).json({
        success: false,
        message: ` no programs update with user ${req.user}`,
      });
    }
    res.status(200).json(updatedProgram);
  } catch (err) {
    next(err);
    res.status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

// get program
export const getProgram = async (req, res, next) => {
  try {
    const program = await Program.findOne({ userId: req.user });
    if (!program) {
      res.status(404).json({
        success: false,
        message: ` no programs find with user  ${req.user}`,
      });
    }
    res.status(200).json(program);
  } catch (err) {
    next(err);
    res.status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

// get program
export const getPrograms = async (req, res, next) => {
  console.log(req.body,"req.body")
  try {
    const programs = await Program.find();
    res.status(200).json({ data: programs });
  } catch (err) {
    next(err);
    res.status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

export const getProgramsByLoginUser = async (req, res, next) => {
  console.log(req.body, "req.body")

  try {
    const programs = await Program.find({userId:req.user});
    res.status(200).json({ data: programs });
  } catch (err) {
    next(err);
  }
};



