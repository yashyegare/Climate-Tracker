import React, { useContext } from "react";
import Hours from "./Hours";
import "./HourlyTemp.css";
import { MyContext } from "../Weatherapp";

const HourlyTemp = (props) => {
  const { fetched_data } = useContext(MyContext);

  return (
    <div className="hours_temp_container">
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"12 Am"}
        temperature={fetched_data.hour00}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sunset.png"}
        time={"03 AM"}
        temperature={fetched_data.hour03}
      ></Hours>
      <Hours
        imgsrc={"/Assets/moon.png"}
        time={"06 AM"}
        temperature={fetched_data.hour06}
      ></Hours>
      <Hours
        imgsrc={"/Assets/moon.png"}
        time={"09 AM"}
        temperature={fetched_data.hour09}
      ></Hours>
      <Hours
        imgsrc={"/Assets/moon.png"}
        time={"12 PM"}
        temperature={fetched_data.hour12}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sunrise.png"}
        time={"03 PM"}
        temperature={fetched_data.hour15}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"06 PM"}
        temperature={fetched_data.hour18}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"09 PM"}
        temperature={fetched_data.hour21}
      ></Hours>
    </div>
  );
};

export default HourlyTemp;
