// import React, { Fragment } from "react";
// import Layout from "./Layout";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Presentation from "./Presentation";
import Layout from "./Layout";

const FirstPage = () => {
  

  return (
    <Layout heading="COUNTRY QUIZ">
      <LandingPage />
      <Presentation />
    </Layout>
  );
};

export default FirstPage;

{
  /* <Layout>
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
    </Layout> */
}
