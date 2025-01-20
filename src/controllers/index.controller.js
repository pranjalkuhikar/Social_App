const User = require("../models/user.models");

module.exports.indexController = (req, res) => {
  res.render("index", { errorMessage: null });
};

module.exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log("User created:", newUser);
    res.status(201).redirect("/user");
  } catch (error) {
    console.log(`CreateUser: ${error.message}`);
    let errorMessage = "Error creating user";
    if (error.code === 11000) {
      if (error.keyPattern.username) {
        errorMessage = "Username already exists";
      } else if (error.keyPattern.email) {
        errorMessage = "Email already exists";
      }
    }
    res.status(400).render("index", { errorMessage });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users retrieved:", users);
    res.status(200).render("users", { users: users });
  } catch (error) {
    console.log(`GetUser: ${error.message}`);
    res.status(500).send("Error retrieving users");
  }
};

module.exports.getDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log("User Particular:", user);
    res.status(200).render("details", { user: user });
  } catch (error) {
    console.log(`GetDetails: ${error.message}`);
    res.status(500).send("Error retrieving user details");
  }
};

module.exports.error = (req, res) => {
  res.render("error");
  res.status(404).send("Page not found");
};
