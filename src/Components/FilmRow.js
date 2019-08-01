import React from "react";
import TMDB from "../TMDB.js";
import FilmPoster from 'FilmPoster.js'

class FilmRow extends React.Component {
  render() {
    return (
      <div className="film-row">
        <FilmPoster/>
      </div>
    );
  }
}

export default FilmRow
