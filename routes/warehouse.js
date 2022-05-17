const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { Item, Warehouse, WarehouseItem } = require("../model/item");

router.get("/:warehouseId", async (req, res) => {
  try {
    warehouse = await Warehouse.findById(req.params.warehouseId);
    res.json(warehouse);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const warehouse = await Warehouse.find();
    res.json(warehouse);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const warehouse = new Warehouse({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      location: req.body.location,
      inventory: req.body.inventory,
    });
    await warehouse.save();
    res.json(warehouse);
  } catch (error) {
    res.send(error);
  }
});

router.post("/:warehouseId/:itemId", async (req, res) => {
  try {
    const warehouse = await Warehouse.findById(req.params.warehouseId);
    let j = -1;
    for (var i = 0; i < warehouse.inventory.length; i++) {
      if (warehouse.inventory[i]._id == req.params.itemId) {
        j = i;
      }
    }
    if (j != -1) {
      return res.status(409).json({
        message: "item already found in this warehouse",
      });
    }
    const item = await Item.findById(req.params.itemId);
    item.quantity = item.quantity - req.body.quantity;
    const warehouseItem = new WarehouseItem({
      _id: item._id,
      quantity: req.body.quantity,
    });
    await warehouse.inventory.push(warehouseItem);
    await warehouse.save();
    await item.warehouses.push(warehouse.name);
    await item.save();
    res.json(warehouse);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:warehouseId/:itemId", async (req, res) => {
  try {
    const warehouse = await Warehouse.findById(req.params.warehouseId);
    const item = await Item.findById(req.params.itemId);
    let j = -1;
    for (var i = 0; i < warehouse.inventory.length; i++) {
      if (warehouse.inventory[i]._id == req.params.itemId) {
        j = i;
      }
    }
    if (j == -1) {
      return res.status(401).json({
        message: "item not found in the specified warehouse",
      });
    }
    delta = warehouse.inventory[j].quantity - req.body.quantity;
    item.quantity = item.quantity + delta;
    if (item.quantity < 0) {
      return res.status(409).json({
        message:
          "Not enough inventory of item left please choose a valid amount",
      });
    }
    warehouse.inventory[j].quantity = req.body.quantity;
    item.save();
    warehouse.save();
    res.json(warehouse);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:warehouseId/:itemId", async (req, res) => {
  try {
    warehouse = await Warehouse.findById(req.params.warehouseId);
    let j = -1;
    for (var i = 0; i < warehouse.inventory.length; i++) {
      if (warehouse.inventory[i].quantity == req.params.itemId) {
        j = i;
      }
    }
    if (j == -1) {
      return res.status(401).json({
        message: "item not found in the specified warehouse",
      });
    }

    warehouse.inventory.splice(j, 1);
    await warehouse.save();
    return res.status(200).json({
      message: "Item Deleted",
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
