import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints, requests } from "../../utlility/requests";
import axios from "../../utlility/axios";

const initialState = {
    popularMovies: {

        status: "idle",
        error: null,
        data: null

    },
    topRatedMovies: {
        status: "idle",
        error: null,
        data: null
    },
    upComingMovies:{
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
export const fetchtopRatedMovies = createAsyncThunk(
    'movie/fetchtopRatedMovies',
    async () => {
        const response = await axios.get(requests.getMovies(endpoints.topRated));
        return response.data
    }
)
export const fetchupComingMovies = createAsyncThunk(
    'movie/fetchupComingMovies',
    async () => {
        const response = await axios.get(requests.getMovies(endpoints.upcoming));
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
            .addCase(fetchtopRatedMovies.pending, (state, action) => {
                state.topRatedMovies.status = 'loading';

            })
            .addCase(fetchtopRatedMovies.fulfilled, (state, action) => {
                state.topRatedMovies.status = 'success';
                state.topRatedMovies.data = action.payload;

            })
            .addCase(fetchtopRatedMovies.rejected, (state, action) => {
                state.topRatedMovies.status = 'failed';
                state.topRatedMovies.error = action.error;
            })
            .addCase(fetchupComingMovies.pending, (state, action) => {
                state.upComingMovies.status = 'loading';

            })
            .addCase(fetchupComingMovies.fulfilled, (state, action) => {
                state.upComingMovies.status = 'success';
                state.upComingMovies.data = action.payload;

            })
            .addCase(fetchupComingMovies.rejected, (state, action) => {
                state.upComingMovies.status = 'failed';
                state.upComingMovies.error = action.error;
            })
    }

});
export const popularMoviesSelector = (state) => state.movie.popularMovies;

export const topRatedMoviesSelector = (state) => state.movie.topRatedMovies;
export const upComingMoviesSelector = (state) => state.movie.upComingMovies;

export default movieSlice.reducer;