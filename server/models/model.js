const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  mobile: Number,
  name: String,
  email: String,
  gender: String,
  birthDay: String,
  job: String,
});

const dataModel = mongoose.model("userTable", testSchema);

module.exports = dataModel;
