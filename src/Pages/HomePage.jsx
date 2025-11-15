import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";

function HomePage() {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(false);

  function getBackground() {
    if (error) return "default-bg"
    if (weather === "Clear") return "sunny-bg";
    if (weather === "Clouds") return "cloudy-bg";
    if (weather === "Rain") return "rainy-bg";
    return "default-bg";
  }
  return (
    <>
      <div className={`app  ${getBackground()}`}>
        <Navbar />
        <HeroSection setWeather={setWeather} setError={setError} />
      </div>
    </>
  );
}

export default HomePage;
