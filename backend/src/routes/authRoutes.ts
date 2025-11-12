import express from "express";
import passport from "passport";
import { register, login } from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

// Google OAuth routes
authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:5173/login" }),
  (req, res) => {
    res.redirect("http://localhost:5173/dashboard"); // frontend redirect after success
  }
);

authRouter.get("/logout", (req, res) => {
  req.logout(() => {
    res.json({ message: "Logged out" });
  });
});
