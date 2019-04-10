import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors);
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div>
            <h1>{director.name}</h1>
            <h1>{director.movies}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
