import React, { useContext } from "react";
import "./TodaysHighlight.css";
import Card from "../../UI/Card";
import AirIcon from "@mui/icons-material/Air";
import AirType from "./AirType";
import { MyContext } from "../Weatherapp";
import RiseSet from "./RiseSet";
import OtherType from "./OtherType";
import HumidityIcon from "@mui/icons-material/OpacityOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FeelslikeIcon from "@mui/icons-material/DeviceThermostatSharp";
import PressureIcon from "@mui/icons-material/CompressSharp";
import SunrisetIcon from "@mui/icons-material/WbSunnyOutlined";
import SunsetIcon from "@mui/icons-material/NightlightOutlined";

const IconSize = {
  fontSize: "40px",
};

const TodaysHighlight = () => {
  const { fetched_data } = useContext(MyContext);

  return (
    <Card className="highlight">
      <div className="today_highlight_container">
        <h3 className="highlight_label">Todays Highlight</h3>
        <div className="container">
          <div className="uppercontainer">
            <Card className="highlight_left_container">
              <div className="airlable_container">
                <div className="airlabel">Air Qulaity Index</div>
                <p className="unit">μg/m3</p>
              </div>
              <div className="highlight_divider"> </div>
              <div className="airdata">
                <AirIcon style={IconSize} />
                <div className="airtype_container">
                  <AirType title={"PM25"} titleData={fetched_data.PM25} />
                  <AirType title={"SO2"} titleData={fetched_data.SO2} />
                  <AirType title={"NO2"} titleData={fetched_data.NO2} />
                  <AirType title={"O3"} titleData={fetched_data.O3} />
                </div>
              </div>
            </Card>
            <Card className="highlight_right_container">
              <div className="airlable_container">
                <div className="airlabel">Sunrise & Sunset</div>
              </div>
              <div className="highlight_divider"> </div>
              <div className="sunrise_sunset">
                <RiseSet
                  seticon={<SunrisetIcon style={IconSize} />}
                  SunTitle={"Sunrise"}
                  SunTime={fetched_data.sunrise}
                />
                <RiseSet
                  seticon={<SunsetIcon style={IconSize} />}
                  SunTitle={"Sunset"}
                  SunTime={fetched_data.sunset}
                />
              </div>
            </Card>
          </div>
          <div className="lowercontainer">
            <OtherType
              highlightTitle={"Humidity"}
              icon={<HumidityIcon />}
              highlightTitleData={fetched_data.humidity}
              parameter={"%"}
            ></OtherType>
            <OtherType
              highlightTitle={"Pressure"}
              icon={<PressureIcon />}
              highlightTitleData={fetched_data.pressure}
              parameter={"hPa"}
            ></OtherType>
            <OtherType
              highlightTitle={"Visibility"}
              icon={<VisibilityIcon />}
              highlightTitleData={fetched_data.visibility}
              parameter={"km"}
            ></OtherType>
            <OtherType
              highlightTitle={"Feels Like"}
              icon={<FeelslikeIcon />}
              highlightTitleData={fetched_data.feels_like}
              parameter={"°C"}
            ></OtherType>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TodaysHighlight;
