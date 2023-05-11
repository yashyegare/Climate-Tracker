import React, { useContext } from "react";
import Card from "../../UI/Card";
import "./Forecast.css";
import Future from "./Future";
import { MyContext } from "../Weatherapp";

const Forecast = () => {
  const { fetched_data } = useContext(MyContext);

  return (
    <div className="forecast_otherinfo_conatiner">
      <Card>
        <div className="forecast">
          <Future
            date={fetched_data.nextday1date}
            min={fetched_data.nextday1mintemp}
            max={fetched_data.nextday1maxtemp}
          />
          <Future
            date={fetched_data.nextday2date}
            min={fetched_data.nextday2mintemp}
            max={fetched_data.nextday2maxtemp}
          />
        </div>
      </Card>
      <h4 className="otherinfolabel">Other info</h4>
      <Card>
        <div className="otherinfo_conatiner">
          <div className="otherinfo">
            <p>Lat: {fetched_data.lat}</p>
            <p>Lon: {fetched_data.lon}</p>
          </div>
          <p className="timezone">Time Zone: {fetched_data.timezone}</p>
          <p className="localtime">Local Time: {fetched_data.localtime}</p>
        </div>
      </Card>
    </div>
  );
};

export default Forecast;
