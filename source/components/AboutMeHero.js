import React from "react";

const AboutMeHero = () => {
  return (
      <div className="aboutMeHero">
        <div class="columns is-vcentered">
        <div class="column is-8">
            <p className="subtitle is-3 is-size-5-touch">
            I’m an 20-year-old developer from<br /> <a target="_blank" href="https://www.google.com/maps/place/Pune,+Maharashtra/data=!4m2!3m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343?sa=X&ved=2ahUKEwjijpjfjvLqAhU4zzgGHUhsDM8Q8gEwAHoECAsQAQ">Pune, Maharashtra, India.</a>  <br />
            I’m passionate about front-end development and creating cool UI/UX.
            </p>
            <p className="subtitle is-3 is-size-5-touch ">
            Currently the lead at <a target="_blank" href="http://skn.hackclub.com/"> Hack Club, SKNCOE,</a>  creating a solid
            community of developers by building cool projects.
            </p>
            <p className="subtitle is-3 is-size-5-touch ">
            I also occasionally game, mostly CSGO.  <br />
            Add me on <a target="_blank" href="https://steamcommunity.com/id/Zeneks24"><i class="fab fa-steam"></i></a><br />
            or listen to my playlist <a target="_blank" href="https://open.spotify.com/playlist/5ZbXxINFoPSdFbpoNxDctm?si=jtS1ss83S3y442irHq_HFg"> <i class="fab fa-spotify"></i></a>
        </p>
        </div>
        <div class="column">
        <figure class="image ">
        <img className="is-rounded" src="img/sumit.jpeg"/>
      </figure>
        </div>
        </div>
      </div>
   
  );
};

export default AboutMeHero;
