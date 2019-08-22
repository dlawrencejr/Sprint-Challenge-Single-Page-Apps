import React from "react";
import {Card,Icon,Image} from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (

    // <span className='character-card'>
    //   <img src={props.img} alt='' />
    //   <h2 className='character-name'>{props.name}</h2>
    //   <p>Status: {props.status}</p>
    //   <p>Location: {props.location}</p>
    //   <p>Origin: {props.origin}</p>
    // </span>

    <Card >
      {/* // image={props.img} alt=''
      // header={props.name}
      // meta={props.status}
      // description={props.location}
     */}
      <Image src={props.img} wrapped ui={false} />

      <Card.Content>

        <Card.Header>{props.name}</Card.Header>

        <Card.Meta>
          <span>

          {props.species} {props.status} 
          
          </span>
          
        </Card.Meta>

        <Card.Description>

        <p> Location: {props.location} </p>
         
        <p> Origin: {props.origin} </p>
         
        </Card.Description>

      </Card.Content>

      <Card.Content extra>
       
          <Icon name='user'/>
          episodes: {props.episode.length}
        
      </Card.Content>
    </Card>

    );
}
