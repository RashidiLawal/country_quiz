import React from 'react'
import Layout from "./Layout";
// import { Routes, Route } from "react-router-dom";

const ResultPage = () => {
  return (
    <Layout>
      <h1 className="fist">COUNTRY QUIZ</h1>
      <div className="landa">
        <div className="image3">
          <img src="/undraw_winners_ao2o 2.svg" alt="" />
        </div>
        <section>
          <p className="para con">Results</p>
        </section>
        <section>
          <p className="para eighteen four">
            You got <span className="spa">4</span> correct answers
          </p>
        </section>
        <section>
          <button className="para eighteen fisr" type="button">
            Try again
          </button>
        </section>
      </div>
    </Layout>
  );
}

export default ResultPage