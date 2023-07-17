import React, { useEffect, useState } from 'react';
import { fetchNetflixOrignals, nfOriginalsSelector } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Row from '../components/Row';




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

            <Row />
        </>

    );
}

export default HomeScreen;  