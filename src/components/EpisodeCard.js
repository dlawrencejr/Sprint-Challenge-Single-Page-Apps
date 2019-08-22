import React from 'react';
import {Card} from 'semantic-ui-react';

export default function EpisodeCard(props){
    return (
        // <span className='episode-card'>
        //     <h2>{props.name}</h2>
        //     <h3>Episode: {props.episode}</h3>
        //     <p>{props.air_date}</p>
        // </span>

        <Card
        header={props.name}
        meta={props.air_date}
        description={props.episode}
        />

        
    );
}