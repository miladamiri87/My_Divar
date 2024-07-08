import React from "react";
import {
    Link,
    NavLink,
    Outlet,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
  import { getCity } from "../data/data";


export default function Navbar() {
    let cities = getCity();

  return (
    <div className="App">
      <h1>My Divar</h1>
      <div className="container_links">
        <Link to="/about">About</Link>
        {/* <Link to="/adv">Create Advertisement</Link> */}
        <Link to="/news">News</Link>
        <Link to="/service">Services</Link>
      </div>
      <hr />
      <p className="container_city">
        {cities.map((city) => (
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
            to={city.city_name}
            key={city.city_id}
          >
            {city.city_name}
          </NavLink>
        ))}
      </p>
    </div>
  );
}
