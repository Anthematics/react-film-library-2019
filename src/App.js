import React from 'react';
import FilmDetails from './Components/FilmDetails.js'
import FilmListing from './Components/FilmListing.js'
import FilmPoster from './Components/FilmPoster.js'
const App = () => {
  return (
    <main className="film-library">
    <FilmListing/>
    <FilmDetails/>
    <FilmPoster/>
    </main>
  );
}

export default App;
