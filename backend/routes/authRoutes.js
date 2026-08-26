const express = require("express");
const passport = require("passport");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateTokens");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  }),
  async (req, res) => {
    try {
      const user = req.user;

      const accessToken = generateAccessToken(user);

      const refreshToken = generateRefreshToken(user);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.redirect(
        `${process.env.CLIENT_URL}/oauth-success?token=${accessToken}`
      );
    } catch (error) {
      console.error(error);

      res.redirect(`${process.env.CLIENT_URL}/login`);
    }
  }
);

module.exports = router;