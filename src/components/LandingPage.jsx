import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {newQuiz} from 'country-quiz'


const LandingPage = () => {
  
  const showCountries = () => {
    
  }

  const quizez = newQuiz("capital-to-country", 7);

  const countryInfo = quizez["questions"][0].question;
  // console.log(countryInfo);

  const countryInfo2 = quizez["questions"][0]["options"];

  /*  useEffect(() => {
     axios
       .get("https://restcountries.com/v2/all?fields=name,capital,flag")
       .then((response) => {
         console.log(response.data);
       });
   }, []); */
  // console.log(countryInfo2[0]);
  // const getCapital = () => {
  //   axios.get("https://restcountries.com/v2/all?fields=name,capital,flag").then((response) => {
  //     setCountry(response.data);
  //   });
  // };

  return (
    <main>
      <section className="landline">
        <h3>Select an asnwer</h3>
        <section className="ansec">
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
        </section>
        <section className="para1 lone">
          <p>{countryInfo} is the capital of ?</p>
        </section>
        <section className="all1">
          <section className="secLand">
            <span className="tops1">A</span>
            <span
              className={`tops2 ${
                countryInfo2[1].length > 20 ? "text-sm" : "font-medium"
              }`}
            >
              {countryInfo2[0]}
            </span>
          </section>
          <section className="secland2">
            <span className="tops1">B</span>
            <span
              className={`tops2 ${
                countryInfo2[1].length > 20 ? "text-sm" : "font-medium"
              }`}
            >
              {countryInfo2[1]}
            </span>
          </section>
          <section className="secland3">
            <span className="tops1">C</span>
            <span
              className={`tops2 topla ${
                countryInfo2[1].length > 20 ? "text-sm" : "font-medium"
              }`}
            >
              {countryInfo2[2]}
            </span>
          </section>

          <section className="secland4">
            <span className="tops1">D</span>
            <span
              className={`tops2 topla ${
                countryInfo2[1].length > 20 ? "text-sm" : "font-medium"
              }`}
            >
              {countryInfo2[3]}
            </span>
          </section>
        </section>
      </section>
    </main>
  );
};

export default LandingPage;
