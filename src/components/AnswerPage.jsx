import React from 'react'
import Layout from "./Layout";
import { Link } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
import LineIcon from "react-lineicons";
const AnswerPage = () => {
  return (
    <Layout>
      <h1 className="fist">COUNTRY QUIZ</h1>
      <div className="land">
        <section className="ansec">
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
        </section>
        <p className="para1 lone">Kuala Lumpur is the capital of</p>
        <div className="all1">
          <section className="sec1">
            <span className="tops1">A</span>
            <span className="tops2">Vietnam</span>
            <span className="tops3">
              <LineIcon name="cross-circle" />
            </span>
          </section>
          <section className="sec2">
            <span className="tops1">B</span>
            <span className="tops2">Malaysia</span>
            <span className="tops3">
              <LineIcon name="checkmark-circle" />
            </span>
          </section>
          <section className="sec3">
            <span className="tops1">C</span>
            <span className="tops2">Sweden</span>
          </section>
          <section className="sec4">
            <span className="tops1">D</span>
            <span className="tops2">Austria</span>
          </section>
        </div>
        <button className="buta">
          <Link to="/resultpage">Next</Link>
        </button>
      </div>
    </Layout>
  );
}

export default AnswerPage