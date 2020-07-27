import React from "react";

const Sections = (props) => {
  return (
    <section className="section">
      <div className="container px-6">
        <h5 className="subtitle is-5 ">{props.subtitle}</h5>
        <h1 className="title is-3 is-size-4-touch  ">{props.title}</h1>
      
      </div>
    </section>
  );
};

export default Sections;
