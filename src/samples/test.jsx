import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TestAPI() {
  useEffect(() => {
    fetchItems();
  }, []);
  // useEffect is called when the function mounts to the DOM

  const [items, setItems] = useState([]);

  const appLat = "48.19";
  const appLon = "16.34";
  const units = "metric";
  const lang = "en";
  const apiKey = "1b244ed2408abf2b4f04d1a7a3ccc3d4";
  const weathercall =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    appLat +
    "&lon=" +
    appLon +
    "&units=" +
    units +
    "&lang=" +
    lang +
    "&appid=" +
    apiKey;

  const fetchItems = async () => {
    const data = await fetch(weathercall);
    const items = await data.json();
    console.log(items.daily);
    setItems(items.daily);
  };
  return (
    <div className="flex-shrink-0" style={{ paddingTop: "120px" }}>
      <h1>Provided Information:</h1>

      {items.map((item) => (
        <h1 key={item.dt}>
          <Link to={`/testAPI/${item.dt}`}>{item.dt} </Link>
        </h1>
      ))}
    </div>
  );
}

export default TestAPI;
