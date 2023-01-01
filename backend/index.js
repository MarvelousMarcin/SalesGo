const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL);
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

const userRoutes = require("./routes/userRoutes");

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
