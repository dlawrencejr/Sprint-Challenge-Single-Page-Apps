import React from "react";

export default function CharacterCard(props) {
  return (

    <span className='character-card'>
      <img src={props.img} />
      <h2 className='character-name'>{props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Location: {props.location}</p>
      <p>Origin: {props.origin}</p>
    </span>

    );
}
