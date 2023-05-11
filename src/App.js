import "./App.css";
import Weatherapp from "./Component/Weatherapp";

function App() {
  const API = process.env.REACT_APP_WEATHER_API_KEY;

  return (
    <div className="App">
      <Weatherapp apikey={API} />
    </div>
  );
}

export default App;
