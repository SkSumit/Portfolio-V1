import React from "react";

export default class Footer extends React.Component {

  goTop = () =>{
    var element = document.querySelector('.pattern-dots-sm')
   
    element.scrollIntoView({behavior: "smooth"});
  }

  render() {
    return(
      <footer className="footer">
      <div className="content has-text-centered">
        <h3 className="title is-1">Text me hey at</h3>
        <h3 className="subtitle is-3">
          <a target="_blank" href="https://www.instagram.com/sumitkolpekwar/">
            {" "}
            <i class="fab fa-instagram  mx-2"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/sumitkolpekwar/">
            {" "}
            <i class="fab fa-linkedin  mx-2"></i>
          </a>
          <a target="_blank" href="https://github.com/SkSumit">
            {" "}
            <i class="fab fa-github  mx-2"></i>
          </a>
          <a target="_blank" href="mailto:kolsum24@gmail.com">
            {" "}
            <i class="fas fa-envelope  mx-2"></i>
          </a>
        </h3>
        <h5 className="subtitle is-5 has-text-centered">
          made with
          <a>
            <i class="fas fa-heart mx-2"></i>
          </a>{" "}
          &
          <a
            target="_blank"
            href="https://open.spotify.com/playlist/5ZbXxINFoPSdFbpoNxDctm?si=jtS1ss83S3y442irHq_HFg"
          >
            {" "}
            <i class=" mx-2 fab fa-spotify"></i>
          </a>
        </h5>

        <p class="buttons stp is-rounded">
          <button onClick={this.goTop} class="button is-medium ">
            <span class="icon ">
              <i class="fas fa-rocket" data-fa-transform="rotate-270"></i>
            </span>
          </button>
        </p>
      </div>
    </footer>

    )
    
  }
}
