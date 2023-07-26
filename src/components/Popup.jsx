import React from 'react';
import { useSelector } from 'react-redux';
import { videoDetailsSelector } from '../features/common/commonSlice';
import Ratings from './Ratings';
import VideoPlayer from './VideoPlayer';



function Popup(props) {

    const { data , genre } = useSelector(videoDetailsSelector)
   

    return (
        <div>
            <div className="modal" tabIndex="-1" id="video-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <VideoPlayer videoList={data?.video.results}/>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button><br/>
                                  
                        </div>
                        <div className="modal-body">
                    
                            <h2>{data?.title}</h2>
                            <p>{data?.overview}</p>
                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;