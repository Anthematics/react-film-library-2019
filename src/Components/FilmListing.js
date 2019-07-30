import React from "react";
import TMDB from '../TMDB.js'
import FilmPoster from './FilmPoster.js'

class filmListing extends React.Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">Films</h1>
          {TMDB.films.map((film,index) => {
            return(
             <div>
              <FilmPoster/>
              <h2> {film.title} </h2>
              <p> {film.release_date} </p>
             </div>
            )
          })}

        </div>
      </div>
    );
  }
}

export default filmListing

// "id": 343668,
//         "title": "Kingsman: The Golden Circle",
//         "poster_path": "/pKESfn2Pdy0b7drvZHQb7UzgqoY.jpg",
//         "backdrop_path": "/uExPmkOHJySrbJyJDJylHDqaT58.jpg",
//         "overview": "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
//         "release_date": "2017-09-20"