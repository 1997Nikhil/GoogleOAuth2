const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {      // Generate a JWT access token for the user
  return jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: "15m",
    }
  );
};

const generateRefreshToken = (user) => {         // Generate a JWT refresh token for the user
  return jwt.sign(
    {
      userId: user._id,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};