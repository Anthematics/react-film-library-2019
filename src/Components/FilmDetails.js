import React from "react";
import TMDB from '../TMDB.js'

class FilmDetails extends React.Component {
render () {
  return (
    <div className = 'film-summary'>
      <h1> Title </h1>
      <p> Year </p>
    </div>
  )
}

}

export default FilmDetails