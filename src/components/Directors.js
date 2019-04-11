import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirector = directors.map(directorObj => {
    return (
      <div>
        <h1>{directorObj.name}</h1>
        <ul>{directorObj.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirector}
    </div>
  );
}

export default Directors
