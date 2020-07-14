const mongoose = require("mongoose");

studentSchema = new mongoose.Schema({
  //studentRegNum: { type: Number, required: true },
  username: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("teacherdb", studentSchema);
