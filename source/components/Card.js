import React from "react";

const Card = (props) => {
  return (
    <div class="columns animate__animated animate__fadeIn animate__slower project  my-6  is-vcentered">
      <div class="column has-text-centered ">
        <p class="title mt-2">{props.title}</p>
        <p class="subtitle">
          {props.subtitle}
          <a target="_blank" href={props.gitUrl}>
            <i class="fab fa-github mx-2"></i>
          </a>
          <a target="_blank" href={props.linkUrl}>
            <i class="fas fa-external-link-alt  mx-2"></i>
          </a>
        </p>
      </div>
      <div class="column ">
        <figure className="image">
          <img src={props.imgUrl} />
        </figure>
      </div>
    </div>
  );
};

const CardInverse = (props) => {
  return (
    <div class="columns project is-vcentered">
      <div class="column">
        <figure className="image">
          <img src={props.imgUrl} />
        </figure>
      </div>
      <div class="column  has-text-centered ">
        <p class="title mt-2 ">{props.title}</p>
        <p class="subtitle">
          {props.subtitle}
          <a target="_blank" href={props.gitUrl}>
            <i class="fab fa-github mx-2"></i>
          </a>
          <a target="_blank" href={props.linkUrl}>
            <i class="fas fa-external-link-alt  mx-2"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export { Card, CardInverse };
