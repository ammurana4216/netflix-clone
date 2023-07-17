import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints, requests } from "../../utlility/requests";
import axios from "../../utlility/axios";

const initialState = {
    popularMovies: {

        status: "idle",
        error: null,
        data: null

    },
}


export const fetchPopularMovies = createAsyncThunk(
    'movie/fetchPopularMovies',
    async () => {
        const response = await axios.get(requests.getMovies(endpoints.popular));
        return response.data
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending, (state, action) => {
                state.popularMovies.status = 'loading';

            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.popularMovies.status = 'success';
                state.popularMovies.data = action.payload;

            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.popularMovies.status = 'failed';
                state.popularMovies.error = action.error;
            })

    }

});
export const popularMoviesSelector = (state) => state.movie.popularMovies;


export default movieSlice.reducer;