import React from "react";


const Sections = (props) => {
  return (
    <section className={`section ${ props.gray } `}>
      <div className="container px-6">
       <h1 className="title is-1 is-size-3-touch  ">{props.title}</h1>
       <h5 className={`subtitle is-3 ${ props.white } `}>{props.subtitle}</h5>
        {props.cards} {props.skills} 
        {props.hero}
       
      </div>
    </section>
  );
};

export default Sections;
