const WeatherSchema = require("../models/weatherSchema");

const getWeatherData = async (req, res) => {
  try {
    let weatherData = await WeatherSchema.find({});
    if (!weatherData)
      res.status(404).send({
        message: "data not found!",
      });
    res.status(200).send(weatherData);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = getWeatherData;
