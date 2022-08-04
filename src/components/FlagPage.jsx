import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Routes, Route } from "react-router-dom";
import {newQuiz} from 'country-quiz'

const FlagPage = () => {
  const quiz = newQuiz('flag-to-country', 5);
  const [flag, setFlag] = useState([]);

  // console.log(quiz["questions"][Math.floor(Math.random() * 5)].question);
  // console.log(quiz);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setFlag(response.data);
    });
  }, []);

  // console.log(flag[0]?.flags?.png);
  
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
        <h3>Select an asnwer</h3>
        {/* <img
          src={flag[Math.floor(Math.random() * 251)]?.flags?.png}
          alt="country flag"
          className="flagra"
        /> */}
        <img
          src={quiz["questions"][Math.floor(Math.random() * 5)].question}
          alt="country flag"
          className="flagra"
        />
        <section className="ansec">
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
        </section>
        <ul className="para1 back">
          <li className="liner">which country does this flag</li>
          <li className="liner">belong to ?</li>
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
            <span className="tops2 topla">Sweden</span>
          </section>
          <section className="sec4f">
            <span className="tops1">D</span>
            <span className="tops2 topla">Austria</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FlagPage;
