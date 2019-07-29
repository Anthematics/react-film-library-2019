import React from "react";
import TMDB from '../TMDB.js'

class filmListing extends React.Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">Films</h1>
          <h1>{TMDB.props.films}</h1>
        </div>
      </div>
    );
  }
}

export default filmListing