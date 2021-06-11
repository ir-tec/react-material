const Router = require("express").Router();
const dataModel = require("../models/model");

Router.post("/", async (req, res) => {
  const newUser = {
    mobile: req.body.userMobile,
    name: req.body.userName,
    email: req.body.userEmail,
    gender: req.body.userGender,
    birthDay: req.body.userBirthday,
    job: req.body.userJob,
  };
  const user = new dataModel(newUser);
  const newUserData = await user.save(() => {
    res.json(user);
  });
});

Router.get("/allUsers", async (req, res) => {
  const allUsers = await dataModel.find();
  res.json(allUsers);
});

module.exports = Router;
