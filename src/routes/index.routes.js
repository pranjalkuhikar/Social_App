const express = require("express");
const {
  indexController,
  createUser,
  getUser,
  getDetails,
  error,
} = require("../controllers/index.controller");

const router = express.Router();

router.get("/register", indexController);
router.post("/register", createUser);
router.get("/user", getUser);
router.get("/user/:id", getDetails);
router.get("*", error);
router.get("/user/*", error);

module.exports = router;
