import React from 'react';

function Card(props) {

    const { video } = props;


    return (
        <div>
            <img className='w-100' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />

        </div>
    );
}

export default Card;