import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <section className="hero pattern-dots-sm has-text-centered is-fullheight">
      <div className="hero-body">
        <div className="container    ">
          <ScrollAnimation duration="1" animateIn="slideInDown">
            <h5 className="title is-5 is-size-5-desktop">Hey there, I'm</h5>
          </ScrollAnimation>
          <ScrollAnimation duration="3" animateIn="fadeIn">
            <h1 className="title animate__animated animate__fadeIn animate__slower is-1 is-size-1-desktop ">
              Sumit Kolpekwar
            </h1>
            <h3 className="subtitle animate__animated animate__fadeIn animate__slower is-3 is-size-3-desktop">
              Aspiring Full Stack Developer
            </h3>
          </ScrollAnimation>
          <ScrollAnimation duration="2" animateIn="slideInUp">
            <h6 className="subtitle is-5">and part-time shitposter</h6>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
