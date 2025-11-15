import React from "react";

function WeatherCard({ title, description, icon }) {
  return (
    <>
      <div className="flex items-center bg-primary text-white w-fit px-5 py-3 rounded-2xl justify-center">
        <div className="text-4xl">{icon}</div>
        <div className="ml-3 text-left">
          <h1 className="text-lg font-semibold">{title}</h1>
          <h3>{description}</h3>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
