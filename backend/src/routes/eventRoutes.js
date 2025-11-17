// backend/src/routes/eventRoutes.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const prisma = new PrismaClient();
const router = express.Router();

// ✅ Create Event (Protected Route)
router.post("/", authenticateToken, async (req, res) => {
  const { title, date, type } = req.body;

  // Extra safety check
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized. No user found in token." });
  }

  if (!title || !date || !type) {
    return res.status(400).json({ message: "Please provide title, date, and type" });
  }

  try {
    const event = await prisma.event.create({
      data: {
        title,
        date: new Date(date),
        type,
        userId: req.user.id, // <-- JWT me jo id hai wahi use hoga
      },
    });

    res.status(201).json(event);
  } catch (err) {
    console.error("Event creation error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Get all events for the logged-in user (optional)
router.get("/", authenticateToken, async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      where: { userId: req.user.id },
    });
    res.json(events);
  } catch (err) {
    console.error("Fetch events error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Default Export
export default router;
