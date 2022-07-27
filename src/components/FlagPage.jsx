import React from 'react'
import Layout from "./Layout";
// import { Routes, Route } from "react-router-dom";

const FlagPage = () => {
  return (
    <Layout>
      <h1 className="">Select an Answer</h1>
      <div className="land">
        <section>
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
          <div>to show flag</div>
        </section>
        <div>
          <img src="" alt="" />
          <p>which country does this flag belong to?</p>
          <section>
            <span>A</span>
            <span>Vietnam</span>
          </section>
          <section>
            <span>B</span>
            <span>Finland</span>
          </section>
          <section>
            <span>C</span>
            <span>Sweden</span>
          </section>
          <section>
            <span>D</span>
            <span>Austria</span>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default FlagPage