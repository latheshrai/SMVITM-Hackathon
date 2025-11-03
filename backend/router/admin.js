const express = require("express");
const router = express.Router();
const { saveUser } = require("../controllers/userController");

// Route: POST /api/save-user
router.post("/save-user", saveUser);

module.exports = router;
