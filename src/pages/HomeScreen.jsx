import React, { useEffect } from 'react';
import { fetchNetflixOrignals, nfOriginalsSelector } from '../features/tv/tvSlice';
import { useDispatch ,useSelector} from 'react-redux';

function HomeScreen(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNetflixOrignals());

    }, [])

const nfOriginals= useSelector(nfOriginalsSelector);
console.log(nfOriginals);




    return (
        <div>

        </div>
    );
}

export default HomeScreen;  