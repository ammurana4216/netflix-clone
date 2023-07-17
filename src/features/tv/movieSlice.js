import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requests } from "../../utlility/requests";
import axios from "../../utlility/axios";

const initialState = {
    nfOriginals: {

        status: "idle",
        error: null,
        data: null

    }

}


export const fetchPopularMovies = createAsyncThunk(
    'tv/fetchPopularMovies',
    async () => {
        const response = await axios.get(requests.getNetflixOrignals)
        return response.data
    }
)

export const movieSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending, (state, action) => {
                state.nfOriginals.status = 'loading';

            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.nfOriginals.status = 'success';
                state.nfOriginals.data = action.payload;

            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.nfOriginals.status = 'failed';
                state.nfOriginals.error = action.error;
            })

    }

});
export const nfOriginalsSelector = (state)=> state.tv.nfOriginals;


export default movieSlice.reducer;