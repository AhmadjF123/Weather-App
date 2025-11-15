import React, { useState } from "react";
import { WiThermometer } from "react-icons/wi";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import WeatherCard from "./WeatherCard";

import { ClipLoader } from "react-spinners";

function HeroSection({ setWeather, setError }) {
  const API_KEY = "efe12ef8e55934cc2d450956242ebd1d";

  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setErrorMessage("");
    setError(false);

    if (city.trim() === "") {
      setErrorMessage("Please enter a city name");
      setError(true);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const result = await res.json();

      if (result.cod === "404") {
        setErrorMessage(`No city called "${city}"`);
        setError(true);
        setData(null);
        setCity("");
        setIsLoading(false);
        return;
      }

      setData(result);
      setWeather(result.weather[0].main);
      setError(false);
      setCity("");
    } finally {
      setIsLoading(false);
    }
  };

  function getWeatherIcon(main) {
    if (main === "Clear") return <WiDaySunny />;
    if (main === "Clouds") return <WiCloudy />;
    if (main === "Rain") return <WiRain />;
    return <WiDaySunny />; // default
  }

  return (
    <>
      <section>
        <form className="flex pt-4 justify-center items-center gap-2" action="">
          <input
            placeholder="Search location..."
            className="border px-4 rounded-3xl w-[250px] h-[30px] focus:outline-none"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="bg-primary text-white px-4 py-2 rounded-3xl cursor-pointer"
          >
            Search
          </button>
        </form>

        <p className="text-red-500 text-center text-3xl font-bold">
          {errorMessage}
        </p>

        {isLoading ? (
          <h2 className="text-center mt-4">
            <ClipLoader size={80} />
          </h2>
        ) : (
          data &&
          data.main && (
            <div className="text-center">
              <h2 className="text-xl font-bold">{data.name}</h2>
              <div className="mt-4 text-center flex flex-col items-center gap-2 md:flex-row md:justify-center">
                <WeatherCard
                  title={"Temperature:"}
                  description={`${data.main.temp} °C`}
                  icon={<WiThermometer />}
                />

                <WeatherCard
                  title={"Weather:"}
                  description={data.weather[0].main}
                  icon={getWeatherIcon(data.weather[0].main)}
                />

                <WeatherCard
                  title={"Humidity:"}
                  description={`${data.main.humidity} %`}
                  icon={<WiHumidity />}
                />

                <WeatherCard
                  title={"Wind speed:"}
                  description={`${data.wind.speed} m/s`}
                  icon={<WiStrongWind />}
                />
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
}

export default HeroSection;
