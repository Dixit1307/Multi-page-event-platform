import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import "./passport/googleStrategy.js";
import authRouter from "./routes/authRoutes.js";  // ✅ default import
import eventRouter from "./routes/eventRoutes.js"; // ✅ default import

dotenv.config();
const app = express();

// ✅ Middlewares
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
