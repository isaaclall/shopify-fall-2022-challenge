const express = require("express");
const { Item } = require("../model/item");
const mongoose = require("mongoose");
const router = express.Router();

// BASIC CRUD DONE need to add new feature for warehouse

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const item = new Item({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    price: req.body.price,
    warehouses: [],
  });

  try {
    await item.save();
    return res.status(201).json({
      message: "item succesful uploaded in directory",
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/:itemId", async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    res.json(item);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:itemId", async (req, res) => {
  try {
    const removedItem = await Item.remove({ _id: req.params.itemId });
    res.json(removedItem);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:itemId", async (req, res) => {
  try {
    const updatedItem = await Item.updateOne(
      { _id: req.params.itemId },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          quantity: req.body.quantity,
          price: req.body.price,
        },
      }
    );

    res.json(updatedItem);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
