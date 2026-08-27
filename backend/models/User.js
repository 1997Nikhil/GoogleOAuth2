const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    googleId: {                      // Optional field for Google ID
      type: String,
      unique: true,
      sparse: true,
    },

    profilePicture: {                // Optional field for profile picture URL
      type: String,
    },

    provider: {                      // Field to indicate the authentication provider
      type: String,
      enum: ["local", "google"],
      default: "google",
    },
  },
  {
    timestamps: true,                // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("User", userSchema);