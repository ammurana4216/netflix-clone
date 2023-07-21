import React from 'react';
import { truncateText } from '../utlility/utils';
import Ratings from './Ratings';

function Card(props) {

    const { video } = props;
    

    return (
        <div className='card h-100 text-white'>
            <img className='card-img-top' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />
            <div className="card-body">
                <h5 className='card-title'>{video?.name || video?.title || video?.orignal_title || video?.orignal_name}</h5>
                <Ratings voteAverage={video?.vote_average} voteCount={video?.vote_count} />

                <p >{truncateText(video?.overview, 60)}</p>
            </div>
        </div>
    );
}

export default Card;