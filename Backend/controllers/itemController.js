import InventoryItem from "../models/InventoryItem.js";

// Get all inventory items for the logged-in user
export const getItems = async (req, res) => {
  try {
    const items = await InventoryItem.find({ user: req.user.userId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items." });
  }
};

// Add a new inventory item
export const addItem = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const item = new InventoryItem({
      name,
      quantity,
      user: req.user.userId,
    });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to add item." });
  }
};

// Update an inventory item
export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const item = await InventoryItem.findOneAndUpdate(
      { _id: id, user: req.user.userId },
      { name, quantity },
      { new: true }
    );
    if (!item) return res.status(404).json({ message: "Item not found." });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to update item." });
  }
};

// Delete an inventory item
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await InventoryItem.findOneAndDelete({ _id: id, user: req.user.userId });
    if (!item) return res.status(404).json({ message: "Item not found." });
    res.json({ message: "Item deleted." });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete item." });
  }
};
