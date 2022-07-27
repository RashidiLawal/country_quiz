import React from 'react'
import Layout from "./Layout";
// import { Routes, Route } from "react-router-dom";

const ResultPage = () => {
  return (
    <Layout>
      <div className="land">
        <div>
          <img src="/undraw_winners_ao2o 2.svg" alt="" />
          <section>
            <p>Results</p>
          </section>
          <section>
            <p>
              You got <span>4</span> correct answers
            </p>
          </section>
          <section>
            <button></button>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default ResultPage