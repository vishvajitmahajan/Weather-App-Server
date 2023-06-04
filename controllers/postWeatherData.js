const WeatherSchema = require("../models/weatherSchema");

const postWeatherData = async (req, res) => {
  try {
    const { city } = req.body;
    let result = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        process.env.API_KEY
    );
    let data = await result.json();
    if(data.cod===200)
      {
   

      let weatherData = new WeatherSchema({
      data,
    });
    // save weatherData details in mongodb
    await weatherData.save();
        }
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = postWeatherData;
