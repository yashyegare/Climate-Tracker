import React, { useState } from "react";
import "./Header.css";
import Icon from "@mui/icons-material/FilterDramaOutlined";
import CurrentIcon from "@mui/icons-material/MyLocationOutlined";
import Searchicon from "@mui/icons-material/TravelExploreSharp";

const Header = (props) => {
  const [inputValue, setInputValue] = useState(""); // UserInput field
  const [city, setCity] = useState(""); // UserInput field

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.headerdata(inputValue);
    setInputValue("");
  };

  // Getting Location Coordinate from user onClick
  function getcoordinate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getlocation);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  const getlocation = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Accessing User Location With coordinate
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    ).then((res) => res.json());

    const city = await response.city;
    setCity(city);

    const sendCity = async () => {
      await props.headerdata(city);
    };

    // Sending City Data to Weather Component for Fetching Weather
    sendCity();
  };

  return (
    <div className="header">
      <div className="appname">
        <Icon />
        <h3>Weather App</h3>
      </div>
      <div className="loctaion_container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search City..."
            value={inputValue}
            onChange={onChangeHandler}
          />
          <Searchicon className="search_btn" onClick={handleSubmit} />
        </form>
        <button className="current_location" onClick={getcoordinate}>
          <CurrentIcon />
          <div className="loc_label">Current Location</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
