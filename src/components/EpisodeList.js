import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList(props){
    const [episodes,setEpisodes] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(res => {
                console.log('Successful',res.data.results);
                setEpisodes(res.data.results)
            })
            .catch(err => {
                console.log('Nope',err)
            });
    }, []);

    return(
        <section className='episode-list grid-view'>

            {episodes.map(episode => (
                <EpisodeCard
                key={episode.id}
                episode={episode.episode}
                name={episode.name}
                air_date={episode.air_date}
                />
            ))}

        </section>
    );
}