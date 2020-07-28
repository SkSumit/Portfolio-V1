import React from 'react';
import Navbar from './Navbar'
// import { BrowserRouter } from "react-router-dom";
import Hero from './Hero'
import Projects from './Projects'
import Sections from './Sections'
import Cards from './Cards'
import Skills from './Skills'

const Portfolio = () =>{
    return (
       <div>
        <Hero/>
         <Sections title={'Projects'} subtitle={'Some of my featured projects'} cards={<Cards/>}/>
         <Sections title={'Skills'} gray={'section-gray'} skills={<Skills/>}/>
          
         
         
       
      
       </div>
     
    )
  }


  export default Portfolio