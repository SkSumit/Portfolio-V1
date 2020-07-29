import React from "react";
import { Card, CardInverse } from "./Card";

const Cards = (props) => {
  return (
    <div>
      <Card
        title={"Indecision-App"}
        subtitle={"Created using React"}
        imgUrl={"img/indecision-app.png"}
        gitUrl={"https://github.com/SkSumit/Indecision-App"}
        linkUrl={"https://reactindecisionapp.herokuapp.com/"}
      />

      <CardInverse
        title={"DuoLancers"}
        subtitle={"Landing Page using Bulma CSS"}
        imgUrl={"img/duolancers.png"}
        gitUrl={"https://github.com/SkSumit/DuoLancers"}
        linkUrl={"http://duolancers.codes/"}
      />
      <Card
        title={"DeCovid"}
        subtitle={"CoronaVirus Tracking Website"}
        imgUrl={"img/decovid.png"}
        gitUrl={"https://github.com/SkSumit/DeCovid"}
        linkUrl={"https://sksumit.github.io/DeCovid/"}
      />
    </div>
  );
};

export default Cards;
