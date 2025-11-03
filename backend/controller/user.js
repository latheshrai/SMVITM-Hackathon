const User = require("../models/user");

const saveUser = async (req, res) => {
  try {
    const { clerkId, email, firstName, lastName } = req.body;

    const existingUser = await User.findOne({ clerkId });
    if (!existingUser) {
      await User.create({ clerkId, email, firstName, lastName });
    }

    res.status(200).json({ message: "User saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveUser };
