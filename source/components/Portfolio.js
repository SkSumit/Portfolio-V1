import React from 'react';
import Navbar from './Navbar'
// import { BrowserRouter } from "react-router-dom";
import Hero from './Hero'
import Projects from './Projects'
import Sections from './Sections'

const Portfolio = () =>{
    return (
       <div>
        <Hero/>
         <Sections title={'Projects'} subtitle={'Some of my featured projects'}/>
         <Sections title={'Yash'} subtitle={'DEws'}/>
       
      
       </div>
     
    )
  }


  export default Portfolio