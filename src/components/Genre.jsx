import React from 'react';
import { Link } from 'react-router-dom';

function Genre(props) {
  const { genre } = props;


  return (
    <Link className='badge text-bg-warning text-decoration-none py-2 px-4 me-2 ' to={genre.name}>
      {genre.name}    </Link>
  );
}

export default Genre;