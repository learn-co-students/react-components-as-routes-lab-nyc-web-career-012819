import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderedMovies = movies.map(movieObj => {
    return (
      <div>
        <h1>{movieObj.title}</h1>
        <h2>{movieObj.time}</h2>
        <ul>{movieObj.genres.map(genre => <li>{genre}</li>)}</ul>
      </div>
    )
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {renderedMovies}
    </div>
  );
};

export default Movies;
