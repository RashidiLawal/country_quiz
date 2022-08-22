import React from "react";

const Layout = ({heading,children }) => {
  return (
    <main className="layout">
      <div>
        <h1 className="marg">{heading}</h1>
      </div>
      <div className="childa">{children}</div>
    </main>
  );
};

export default Layout;
