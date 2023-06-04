const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
  data: Object,
},{
  timestamps:true});

module.exports = mongoose.model("WeatherData", WeatherSchema);
