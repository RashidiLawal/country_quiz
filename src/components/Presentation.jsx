import React from 'react'

const Presentation = () => {
  return (
    <div>
      <div className="landflag">
        <h3>Select an asnwer</h3>
        {/* <img
          src={flag[Math.floor(Math.random() * 251)]?.flags?.png}
          alt="country flag"
          className="flagra"
        /> */}
        <img
          src=''
          alt="country flag"
          className="flagra"
        />
        <section className="ansec">
          <img src="/undraw_adventure_4hum 1.svg" alt="" />
        </section>
        <ul className="para1 back">
          <li className="liner">which country does this flag</li>
          <li className="liner">belong to ?</li>
        </ul>
        <div className="all1f">
          <section className="secFlag1">
            <span className="tops1">A</span>
            <span className="tops2">Vietnam</span>
          </section>
          <section className="sec3flag">
            <span className="tops1">B</span>
            <span className="tops2">Finland</span>
          </section>
          <section className="sec3f">
            <span className="tops1">C</span>
            <span className="tops2 topla">Sweden</span>
          </section>
          <section className="sec4f">
            <span className="tops1">D</span>
            <span className="tops2 topla">Austria</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Presentation