import React from 'react'
import Layout from "./Layout";
import { Link } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";

const AnswerPage = () => {
  return (
    <Layout>
      <h1>My answer is correct or incorrect?</h1>
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
          <button>
            <Link to="/resultpage">Next</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default AnswerPage