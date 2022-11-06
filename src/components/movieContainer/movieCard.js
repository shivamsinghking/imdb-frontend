import React from "react";
import './index.css'
const MovieCard = ({name, plot, casts, poster, producer, year_of_release}) => {
   return (<div className="card-container">
      <div className="image-container">
         <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/250X150.png" alt="not-found"/>
         </a>
      </div>
      <div>
         <p>Actors: {casts && casts.length && casts.map((d, k) => <i key={k}>{d.actor_name}{k !== casts.length - 1 ? ' , ' : ''}</i>)}</p>
         <p>Release Date: 10/01/2002</p>
         <p>Plot: {plot && plot.length && plot.map((d, k) => <i key={k}>{d}{k !== plot.length - 1 ? ' , ' : ''}</i>)}</p>
      </div>
   </div>)
}

export default MovieCard