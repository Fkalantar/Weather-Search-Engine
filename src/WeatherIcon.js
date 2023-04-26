import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
  "01d": "CLEAR-DAY",
  "01n": "CLEAR-NIGHT",
  "02d": "PARTLY-CLOUDY-DAY",
  "02n": "PARTLY-CLOUDY-NIGHT",
  "03d": "PARTLY-CLOUDY-DAY",
  "03n": "PARTLY-CLOUDY-NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "RAIN",
  "11n": "RAIN",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};
   
  return (
    <ReactAnimatedWeather
     icon= {codeMapping[props.code]}
     color="#1e1e1e"
     size={52}
     animate={true}
    />
  );
}
