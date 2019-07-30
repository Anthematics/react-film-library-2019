import React from "react";
import TMDB from "../TMDB.js";

class FilmPoster extends React.Component {
render() {
  const posterUrl = () => {
    TMDB.films.map((film,index)=> {
      return `{https://image.tmdb.org/t/p/w780/${film.poster_path}}`;
    });

  }
  return (
    <figure className = "film-poster">
        <img src={posterUrl} alt="" />
    </figure>
  )
}
}

export default FilmPoster


