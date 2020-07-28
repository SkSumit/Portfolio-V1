

import React from "react";
import Card from './Card'

const Cards = (props) => {
  return (
    <div class="columns">
        <div class="column">
          <Card/>
        </div>
        <div class="column">
           <Card/>
        </div>
        <div class="column">
          <Card/>
        </div>
    </div>
        
    
  );
};

export default Cards;
