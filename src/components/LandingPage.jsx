import React from 'react'
import Layout from "./Layout";
// import { Routes,Route } from 'react-router-dom';
import { Link } from "react-router-dom";

const LandingPage = () => {



  return (
    <Layout>
      <h1>Select an answer</h1>
      <div className="land">
        <section>
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
        </section>
        <div>
          <p>Kuala Lumpur is the capital of</p>
          <section>
            <span>A</span>
            <span>Vietnam</span>
          </section>
          <section>
            <span>B</span>
            <span>Malaysia</span>
          </section>
          <section>
            <span>C</span>
            <span>Sweden</span>
          </section>
          <section>
            <span>D</span>
            <span>Austria</span>
          </section>
          <Link to="/answerPage">To answer Page</Link>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage