import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {newQuiz} from 'country-quiz'


const LandingPage = () => {
  const quizez = newQuiz('capital-to-country', 7)

  // const [country, setCountry] = useState();

  // useEffect(() => {
  //   getCapital();
  // }, []);

  
  const countryInfo = quizez["questions"][0].question;
  const countryInfo2 = countryInfo["options"];
  console.log(countryInfo);
  

  // const getCapital = () => {
  //   axios.get("https://restcountries.com/v3.1/all").then((response) => {
  //     setCountry(response.data);
  //   });
  // };
  

  return (
    <div>
      <div className="landline">
        <h3>Select an asnwer</h3>
        <section className="ansec">
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
        </section>
        <section className="para1 lone">
          {/* <p>
            {country && country[Math.floor(Math.random() * 251)].capital} is the
            capital of ?
          </p> */}
          <p>{countryInfo} is the capital of ?</p>
        </section>
        <div className="all1">
          <section className="secLand">
            <span className="tops1">A</span>
            {/* <span className="tops2">{countryInfo["options"][0]}</span> */}
          </section>
          <section className="secland2">
            <span className="tops1">B</span>
            {/* <span className="tops2">{countryInfo["options"][1]}</span> */}
          </section>
          <section className="secland3">
            <span className="tops1">C</span>
            {/* <span className="tops2">{countryInfo["options"][2]}</span> */}
          </section>

          <section className="secland4">
            <span className="tops1">D</span>
            {/* <span className="tops2">{countryInfo["options"][3]}</span> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
