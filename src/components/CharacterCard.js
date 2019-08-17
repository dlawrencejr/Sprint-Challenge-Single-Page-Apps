import React from "react";
import {Card} from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (

    // <span className='character-card'>
    //   <img src={props.img} alt='' />
    //   <h2 className='character-name'>{props.name}</h2>
    //   <p>Status: {props.status}</p>
    //   <p>Location: {props.location}</p>
    //   <p>Origin: {props.origin}</p>
    // </span>

    <Card 
      image={props.img} alt=''
      header={props.name}
      meta={props.status}
      description={props.location}
     
      
      />

    );
}
