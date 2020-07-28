import React from "react";


const Sections = (props) => {
  return (
    <section className={`section ${ props.gray } `}>
      <div className="container px-6">
       <h1 className="title is-3 is-size-4-touch  ">{props.title}</h1>
       <h5 className="subtitle is-5 ">{props.subtitle}</h5>
        {props.cards} {props.skills}
       
      </div>
    </section>
  );
};

export default Sections;
