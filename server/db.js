const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/route");

const app = express();
const port = 5000;

require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use(route);

app.listen(port, () => console.log(`Server running on port ${port}`));
