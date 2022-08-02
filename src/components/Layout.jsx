import React from "react";

const Layout = ({heading,children }) => {
  return (
    <section className="layout">
      <div>
        <h1 className="marg">{heading}</h1>
      </div>
      <div className="childa"> {children}</div>
    </section>
  );
};

export default Layout;
