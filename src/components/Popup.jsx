import React from 'react';
import { useSelector } from 'react-redux';
import { videoDetailsSelector } from '../features/common/commonSlice';
import Ratings from './Ratings';
import VideoPlayer from './VideoPlayer';
import Genre from './Genre';
import { runtime, trimYear } from '../utlility/utils';



function Popup(props) {

    const { data } = useSelector(videoDetailsSelector)


    return (
        <div>
            <div className="modal fade" tabIndex="-1" id="video-modal">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">

                            <VideoPlayer videosList={data?.videos.results} />
                            <button type="button " className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button><br /></div>
                         
                        <div className="modal-body">
                       
                            <h2>{data?.name || data?.original_name || data?.title || data?.original_title}</h2>
                            <h6>{trimYear(data?.first_air_date|| data?.release_date)}&nbsp;{runtime(data?.runtime)}</h6>
                            <p>{data?.overview}</p>
                            {
                                data?.genres.map((item) => (
                                    <Genre key={item.id} genre={item} />
                                ))
                            }
                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;