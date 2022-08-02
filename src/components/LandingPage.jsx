import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [country, setCountry] = useState();
  

  useEffect(() => {
    getCapital()
  }, []);
 

  
  console.log(country);
  // console.log(country && country[Math.floor(Math.random() * 251)].capital);
  const getCapital = () => {
      axios.get("https://restcountries.com/v3.1/all").then((response) => {
        setCountry(response.data);
      });
  };
  

  return (
    <div>
      <div className="landline">
        <section className="ansec">
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
        </section>
        <section className="para1 lone">
          <p>
           
            {country && country[Math.floor(Math.random() * 251)].capital} is the
            capital of ?
          </p>
        </section>
        <div className="all1">
          <section className="secLand">
            <span className="tops1">A</span>
            <span className="tops2">Vietnam</span>
          </section>
          <section className="secland2">
            <span className="tops1">B</span>
            <span className="tops2">Malaysia</span>
          </section>
          <section className="secland3">
            <span className="tops1">C</span>
            <span className="tops2">Sweden</span>
          </section>

          <section className="secland4">
            <span className="tops1">D</span>
            <span className="tops2">Austria</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
