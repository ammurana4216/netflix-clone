import React, { useEffect, useState } from 'react';
import { fetchNetflixOrignals, fetchWebSeries, nfOriginalsSelector, nfWebSeriesSelector } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchPopularMovies, fetchtopRatedMovies, popularMoviesSelector, topRatedMoviesSelector } from '../features/movie/movieSlice';


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
                nfOriginals.status === "success" ?
                    <Header video={nfOriginals.data.results[randomIndex]} />
                    : "loading"
            }
            <div className="container-fluid py-3">

                <Row title="Popular Movies" action={fetchPopularMovies} selector={popularMoviesSelector} />
                <Row title="Top Rated Movies" action={fetchtopRatedMovies} selector={topRatedMoviesSelector} />
                <Row title="Web Series" action={fetchWebSeries} selector={nfWebSeriesSelector} />
            </div>
        </>

    );
}

export default HomeScreen;  