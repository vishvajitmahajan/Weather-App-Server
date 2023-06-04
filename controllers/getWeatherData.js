const WeatherSchema = require("../models/weatherSchema");

const getWeatherData = async (req, res) => {
  try {
    let result = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=" +
        process.env.API_KEY
    );
    let defaultData = await result.json();
    let weatherData = await WeatherSchema.find({});
    if (!weatherData)
      res.status(404).send({
        message: "data not found!",
      });
    res.status(200).send({current:defaultData,history:weatherData});
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = getWeatherData;
