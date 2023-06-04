const express = require("express");
const cors = require("cors");

require("dotenv").config();

const Router = require("./Routes/routes");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

const StartServer = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        app.listen(PORT, () => {
          console.log(
            `Server is Connected to Database and running on PORT ${PORT}`
          );
        });
      });
  } catch (error) {
    console.log(error);
  }
};

StartServer();

app.use("/api", Router);
