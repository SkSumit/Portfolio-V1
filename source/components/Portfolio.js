import React from 'react';
import Navbar from './Navbar'
// import { BrowserRouter } from "react-router-dom";
import Hero from './Hero'
import Projects from './Projects'
import Sections from './Sections'
import Cards from './Cards'
import Skills from './Skills'
import AboutMeHero from './AboutMeHero'
import Footer from './Footer'

const Portfolio = () =>{
    return (
       <div>
        <Hero/>
         <Sections id="projects" white={'is-white'} title={'Projects'} subtitle={'Some of my featured projects'}  gray={'section-gray'} cards={<Cards/>}/>
         <Sections title={'Skills'}  skills={<Skills/>}/>
         <Sections title={'About Me'} hero={<AboutMeHero/>}  gray={'section-gray'} />
         <Footer/>
         
         
       
      
       </div>
     
    )
  }


  export default Portfolio