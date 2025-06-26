import express from "express";
import { body, validationResult } from "express-validator";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { getItems, addItem, updateItem, deleteItem } from "../controllers/itemController.js";

const router = express.Router();

const validateItem = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .isString().withMessage("Name must be a string"),
  body("quantity")
    .optional()
    .isInt({ min: 1 }).withMessage("Quantity must be a positive integer"),
];

// Middleware to check validation results
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.get("/", authenticateToken, getItems);
router.post("/", authenticateToken, validateItem, validateRequest, addItem);
router.put("/:id", authenticateToken, validateItem, validateRequest, updateItem);
router.delete("/:id", authenticateToken, deleteItem);

export default router;
