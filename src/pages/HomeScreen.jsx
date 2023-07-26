import React, { useEffect, useState } from 'react';
import { fetchAiringTodaySeries, fetchNetflixOrignals, fetchOnTheAirSeries, fetchTopRatedSeries, nfAiringTodaySeriesSeletor, nfOnTheAirSeriesSelector, nfOriginalsSelector, nfWebSeriesSelector } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchPopularMovies, fetchtopRatedMovies, fetchupComingMovies, popularMoviesSelector, topRatedMoviesSelector, upComingMoviesSelector } from '../features/movie/movieSlice';


function HomeScreen(props) {
    const [randomIndex, setRandomIndex] = useState(null);

    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchNetflixOrignals());

    }, []);


    const nfOriginals = useSelector(nfOriginalsSelector);
    // console.log(nfOriginals);


    useEffect(() => {
        if (nfOriginals.status === "success") {
            let randomIndex = Math.floor(Math.random() * nfOriginals.data.results.length);
            setRandomIndex(randomIndex);
        }
    }, [nfOriginals])

    return (

        <>
        {
                nfOriginals.status === "loading" ? (
                    <div className="h-100 d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-white" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : nfOriginals.status === "success" ? (
            <Header video={nfOriginals.data.results[randomIndex]} platform="tv" />
            
            ) : (
                "error"
                )}
                <div className="container-fluid py-3">

                <Row title="Popular Movies" action={fetchPopularMovies} selector={popularMoviesSelector} platform="movie" />
                <Row title="Top Rated Movies" action={fetchtopRatedMovies} selector={topRatedMoviesSelector} platform="movie" />
                <Row title="Up Coming Movies" action={fetchupComingMovies} selector={upComingMoviesSelector} platform="movie" />
                <Row title="Web Series" action={fetchTopRatedSeries} selector={nfWebSeriesSelector} platform="tv" />
                <Row title="Up Coming Series" action={fetchOnTheAirSeries} selector={nfOnTheAirSeriesSelector} platform="tv" />
                <Row title="Ariring Today" action={fetchAiringTodaySeries} selector={nfAiringTodaySeriesSeletor} platform="tv" />

            </div>
            </>
    );
}

export default HomeScreen;  