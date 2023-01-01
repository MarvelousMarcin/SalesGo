const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL);

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/userRoutes");

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
