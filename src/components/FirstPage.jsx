import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FirstPage = () => {
  const [country, setCountry] = useState('');
  const [] = useState();


  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      console.log(response.data);
    });
  }, []);

  
  https: return (
    <Layout>
      <h1 className="font-[1100]">COUNTRY QUIZ</h1>
      <div className="land">
        <section>
          <h2>Welcome! Have fun as you learn.</h2>
          <img src="/devchallenges.png" alt="" />
        </section>
        <div>
          <section>
            <Link to="/flagPage">Which country does this flag belong to?</Link>
          </section>
          <section>
            <Link to="/landingPage">
              Lumpur is the Capital of which country?
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default FirstPage;
