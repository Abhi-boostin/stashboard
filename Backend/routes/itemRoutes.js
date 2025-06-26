import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { getItems, addItem, updateItem, deleteItem } from "../controllers/itemController.js";

const router = express.Router();

router.get("/", authenticateToken, getItems);         // GET /api/items
router.post("/", authenticateToken, addItem);         // POST /api/items
router.put("/:id", authenticateToken, updateItem);    // PUT /api/items/:id
router.delete("/:id", authenticateToken, deleteItem); // DELETE /api/items/:id

export default router;
