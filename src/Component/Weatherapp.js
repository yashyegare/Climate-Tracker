import React, { createContext, useEffect, useState } from "react";
import Now from "./Now/Now";
import Forecast from "./FutureForecast/Forecast";
import TodaysHighlight from "./TodayHighlight/TodaysHighlight";
import HourlyTemp from "./Hourly/HourlyTemp";
import Header from "./Header/Header";
import "./Weatherapp.css";
const MyContext = createContext();

const Weatherapp = (props) => {
  // Getting City Value from userinput, Current location, local storage
  const [city, setCity] = useState(() => {
    return localStorage.getItem("city") || "Mumbai";
  });

  // Storing Recent City Value to Local Storge
  localStorage.setItem("city", city);

  // Storing all the required Fetch data
  const [fetched_data, setfetched_data] = useState({
    temp: "",
    condition: "",
    city: "",
    country: "",
    region: "",
    lon: "",
    lat: "",
    timezone: "",
    localtime: "",
    sunrise: "",
    sunset: "",
    humidity: "",
    pressure: "",
    visibility: "",
    feels_like: "",
    PM25: "",
    SO2: "",
    NO2: "",
    O3: "",
    hour00: "",
    hour03: "",
    hour06: "",
    hour09: "",
    hour12: "",
    hour15: "",
    hour18: "",
    hour21: "",
    nextday1date: "",
    nextday1maxtemp: "",
    nextday1mintemp: "",
    nextday2date: "",
    nextday2maxtemp: "",
    nextday2mintemp: "",
  });

  // function for Storing all the required Fetch data
  const upadtedata = (data) => {
    setfetched_data({
      ...fetched_data,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      city: data.location.name,
      country: data.location.country,
      region: data.location.region,
      lon: data.location.lon,
      lat: data.location.lat,
      timezone: data.location.tz_id,
      localtime: data.location.localtime,
      //////////////////////////////////////////
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset,
      //////////////////////////////////
      humidity: data.current.humidity,
      pressure: data.current.pressure_mb,
      visibility: data.current.vis_km,
      feels_like: data.current.feelslike_c,
      //////////////////////////////////
      PM25: Number(data.current.air_quality.pm2_5).toFixed(2),
      SO2: Number(data.current.air_quality.so2).toFixed(2),
      NO2: Number(data.current.air_quality.no2).toFixed(2),
      O3: Number(data.current.air_quality.o3).toFixed(2),
      //////////////////////////////////
      hour00: data.forecast.forecastday[0].hour[0].temp_c,
      hour03: data.forecast.forecastday[0].hour[3].temp_c,
      hour06: data.forecast.forecastday[0].hour[6].temp_c,
      hour09: data.forecast.forecastday[0].hour[9].temp_c,
      hour12: data.forecast.forecastday[0].hour[12].temp_c,
      hour15: data.forecast.forecastday[0].hour[15].temp_c,
      hour18: data.forecast.forecastday[0].hour[18].temp_c,
      hour21: data.forecast.forecastday[0].hour[21].temp_c,
      // ///////////////////////////////////////////////
      nextday1date: data.forecast.forecastday[1].date,
      nextday1maxtemp: data.forecast.forecastday[1].day.maxtemp_c,
      nextday1mintemp: data.forecast.forecastday[1].day.mintemp_c,
      nextday2date: data.forecast.forecastday[2].date,
      nextday2maxtemp: data.forecast.forecastday[2].day.maxtemp_c,
      nextday2mintemp: data.forecast.forecastday[2].day.mintemp_c,
    });
  };

  // Api Call to get Search Data
  const fetchdata = async () => {
    const citydata = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${props.apikey}&q=${city}&days=5&aqi=yes`
    ).then((res) => res.json());
    upadtedata(citydata);
  };

  // Upadting the Data when the value of city cahnges
  useEffect(() => {
    fetchdata();
  }, [city]);

  // Setting up the city name entered by user or coordinate
  const headerdata = (data) => {
    setCity(data);
  };

  return (
    <MyContext.Provider value={{ fetched_data }}>
      <div>
        <Header headerdata={headerdata} />
        <div className="main_section">
          <div className="left_container">
            <Now className="now" />
            <h4 className="forecast_label future_label"> Future Forecast</h4>
            <Forecast className="forecast" />
          </div>
          <div className="right_container">
            <TodaysHighlight />
            <h4 className="forecast_label todayLabel">Today At</h4>
            <HourlyTemp />
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export { MyContext };
export default Weatherapp;
