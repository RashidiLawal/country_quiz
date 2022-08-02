import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Routes, Route } from "react-router-dom";

const FlagPage = () => {
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setFlag(response.data);
    });
  }, []);

  console.log(flag[0]?.flags?.png);
  
  // console.log(flag && flag[Math.floor(Math.random() * 251)].capital);
  // console.log(country && country[Math.floor(Math.random() * 251)].capital);

  /*  <div>
    {filteredCountry.map((country, countryIndex) => (
      <div key={`country_${countryIndex}`}>
        <p>Name: {country["name"].common}</p>
        <p>Capital: {country["capital"][0]}</p>
        <p>Area: {country["area"]}</p>
        <p>
          Languages:{" "}
          {Object.values(country["languages"]).map((val) => `${val}, `)}
        </p>
        <img src={country["flags"].png} alt="" />
      </div>
    ))}
  </div>; */

  return (
    <div>
      <div className="landflag">
        <img
          src={flag[Math.floor(Math.random() * 251)]?.flags?.png}
          alt="country flag" className="flagra"
        />
        <section className="ansec">
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
        </section>
        <ul className="para1 back">
          <li>which country does this flag</li>
          <li>belong to ?</li>
        </ul>
        <div className="all1f">
          <section className="secFlag1">
            <span className="tops1">A</span>
            <span className="tops2">Vietnam</span>
          </section>
          <section className="sec3flag">
            <span className="tops1">B</span>
            <span className="tops2">Finland</span>
          </section>
          <section className="sec3f">
            <span className="tops1">C</span>
            <span className="tops2">Sweden</span>
          </section>
          <section className="sec4f">
            <span className="tops1">D</span>
            <span className="tops2">Austria</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FlagPage;
