import React from "react";

function JordanCard({name, image, date, designer}) {
    return (
        <li className="card">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <p>Date Released: {date}</p>
          <p>Designer: {designer}</p>
        </li>
      );
    }


export default JordanCard;