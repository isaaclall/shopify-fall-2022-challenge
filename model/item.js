const mongoose = require("mongoose");

// schema of one item

const item = mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  price: Number,
  _id: mongoose.Schema.Types.ObjectId,
  warehouses: [],
});

const warehouseItem = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quantity: Number,
});

const warehouse = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  location: String,
  inventory: [warehouseItem],
});

const warehouseItemSchema = mongoose.model("warehouseItem", warehouseItem);
const itemSchema = mongoose.model("item", item);
const warehouseSchema = mongoose.model("warehouse", warehouse);

module.exports = {
  Item: itemSchema,
  Warehouse: warehouseSchema,
  WarehouseItem: warehouseItemSchema,
};
