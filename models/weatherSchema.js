const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
  data: Object,
});

module.exports = mongoose.model("WeatherData", WeatherSchema);
