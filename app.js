const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Routes

const itemsRoute = require("./routes/items");
const warehouseRoute = require("./routes/warehouse");

app.use(bodyParser.json());

app.use("/items", itemsRoute);

app.use("/warehouse", warehouseRoute);

app.get("/", (req, res) => {
  res.send("we are on home");
});

mongoose
  .connect(
    "mongodb+srv://isaac:pizzaman@cluster0.o07yy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Database connected!"))
  .catch((err) => console.log(err));

app.listen(3000);
