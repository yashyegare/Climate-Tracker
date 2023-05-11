import React, { useContext } from "react";
import "./Now.css";
import LocationIcon from "@mui/icons-material/FmdGoodOutlined";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
import Card from "../../UI/Card";
import { MyContext } from "../Weatherapp";
import sun from "../../Animations/sun.json";
import cloudsun from "../../Animations/cloudsun.json";
// import rain from "../../Animations/rain.json";
import cloudy from "../../Animations/Cloudy.json";
import partlycloudy from "../../Animations/partlycloudy.json";
import snow from "../../Animations/snow.json";

import Lottie from "lottie-react";

const Now = () => {
  const { fetched_data } = useContext(MyContext);

  const date = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const currentdate = new Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(date);

  let temp = fetched_data.temp;

  let animationicon;

  if (temp >= 25) {
    animationicon = sun;
  } else if (temp < 25 && temp >= 15) {
    animationicon = cloudsun;
  } else if (temp < 15 && temp > 10) {
    animationicon = partlycloudy;
  } else if (temp <= 10 && temp > 5) {
    animationicon = cloudy;
  } else if (temp <= 5) {
    animationicon = snow;
  }

  return (
    <div>
      <Card className="city_temp_container">
        <h2 className="box_label">Now</h2>
        <div className="seach_temp_data">
          <div className="temp_data">
            <div className="temp_container">
              <h3 className="show_temp">
                {fetched_data.temp} °<span className="celcius">C</span>
              </h3>
              <div className="climate_condition">{fetched_data.condition}</div>
            </div>
            <div className="condition_container">
              <Lottie animationData={animationicon} />
            </div>
          </div>
          <div className="divider"> </div>
          <div>
            <div className="dateTime_container">
              <CalendarIcon />
              <p className="date_time">{currentdate}</p>
            </div>
            <div className="loc_container">
              <LocationIcon />
              <p className="detailed_loc">
                {fetched_data.city}, {fetched_data.region},{" "}
                {fetched_data.country}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Now;
