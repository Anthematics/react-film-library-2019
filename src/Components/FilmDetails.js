import React from "react";
import TMDB from "../TMDB.js";

class FilmDetails extends React.Component {
  render() {
    return (
      <div className="film-details">
        {TMDB.films.map((film, index) => {
          return (
            <div className="film-summary">
            <h1 className="section-title"> Details</h1>
              <h1>{film.title}</h1>
              <p>{film.overview}</p>


            </div>
          );
        })}
      </div>
    );
  }
}



export default FilmDetails;
