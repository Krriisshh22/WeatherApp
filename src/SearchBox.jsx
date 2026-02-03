import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeather = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );

      let jsonres = await res.json();
      console.log(jsonres);

      let result = {
        city: city,
        temp: jsonres.main.temp,
        tempMin: jsonres.main.temp_min,
        tempMax: jsonres.main.temp_max,
        humidity: jsonres.main.humidity,
        feelslike: jsonres.main.feels_like,
        weather: jsonres.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    setError(false);
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeather();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          style={{color : "white"}}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>No Such Place Exists In Our Database</p>
        )}
      </form>
    </div>
  );
}
