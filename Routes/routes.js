const router = require("express").Router();
const { getWeatherData, postWeatherData } = require("../controllers");

router.route("/weather").get(getWeatherData).post(postWeatherData);
module.exports = router;
