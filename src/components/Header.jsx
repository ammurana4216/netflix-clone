import React, { useEffect, useState } from 'react';
import { truncateText } from '../utlility/utils';
import Ratings from './Ratings';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, headerVideoSelector } from '../features/common/commonSlice';
import Genre from './Genre';
import VideoPlayer from './VideoPlayer';
function Header(props) {

    const { video, platform } = props
    const dispatch = useDispatch();
    const { data } = useSelector(headerVideoSelector);

    const [isTrailer, setIsTrailer] = useState(false)


    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderDetails({ platform: platform, id: video.id }))
        }
    }, [video])

    const showTrailer = () => {
        setIsTrailer(true);
    }

    return (
        <div className='position-relative'>

            {isTrailer ?
                <VideoPlayer videosList={data?.videos.results} />
                :
                <>
                    <img className='w-100' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />
                    <div className="caption text-white">

                        <h1 className='display-2'>{data?.name || data?.title || data?.orignal_title || data?.orignal_name}</h1>
                        <h3 className='tagline text-warning'>{data?.tagline}</h3>
                        <p className='fs-4'>{truncateText(data?.overview, 150)}</p>
                        <div>
                            {
                                data?.genres.map((item) => (
                                    <Genre key={item.id} genre={item} />
                                ))
                            }

                        </div>
                        <Ratings voteAverage={video?.vote_average} voteCount={video?.vote_count} />
                        <button className='btn btn-outline-secondary' onClick={showTrailer}>Play</button>
                    </div>
                </>
            }
            <div className="header-vignette">
                <div className="header-info-vignette"></div>

            </div>
        </div>

    );
}

export default Header;