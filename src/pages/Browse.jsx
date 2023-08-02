import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOrignals, fetchTopRatedSeries, nfOriginalsSelector, nfWebSeriesSelector } from '../features/tv/tvSlice';
import { fetchPopularMovies, popularMoviesSelector, } from '../features/movie/movieSlice';
import Row from '../components/Row';


function Browse(props) {
    const { platform } = useParams();
    const [videoList, setVideoList] = useState(null);
    const dispatch = useDispatch();
    const nfOriginals = useSelector(nfOriginalsSelector);
    const popularMovies = useSelector(popularMoviesSelector);

    

    useEffect(() => {
        if (platform === "tv") {
            dispatch(fetchNetflixOrignals())

        } else {
            dispatch(fetchPopularMovies())

        }
    }, [platform])

    useEffect(() => {
        if (platform === "tv") {
            setVideoList(nfOriginals.data?.results);
        } else {
            setVideoList(popularMovies.data?.results);
        }
    }, [platform, nfOriginals, popularMovies])

    const randomNumber = Math.floor(
        Math.random() * videoList?.length);


    return (
        <>
            <Header video={videoList ? videoList[randomNumber] : "  "} platform={platform} />
            <Row title="Popular Movies" action={fetchPopularMovies} selector={popularMoviesSelector} platform={platform} />
            <Row title="Web Series" action={fetchNetflixOrignals} selector={nfOriginalsSelector} platform={platform} />

        </>
    );
}

export default Browse;