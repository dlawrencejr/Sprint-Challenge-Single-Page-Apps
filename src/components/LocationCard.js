import React from "react";
import {Card,Icon} from 'semantic-ui-react';


export default function LocationCard(props) {
  return (

    // <span className='location-card'>
    //   <h3>{props.name}</h3>
    //   <h4>Type:{props.type}</h4>
    //   <p>Dimension: {props.dimension}</p>
    // </span>

      //  <Card
      //  header={props.name}
      //  meta={props.type}
      //  description={props.dimension}
      //  extra={<Icon name='user'/>} 
      //  />
      
       <Card>
       <Card.Content>
         <Card.Header>{props.name}</Card.Header>
         <Card.Meta>
           <span>
             <br></br>
             {props.type} {props.dimension}
           </span>
         </Card.Meta>
       </Card.Content>
       <Card.Content extra className='residents'>
           <Icon name="user"/>
           Residents: {props.residents.length}
         </Card.Content>
     </Card>

  );
}
