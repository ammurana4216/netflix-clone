import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints, requests } from "../../utlility/requests";
import axios from "../../utlility/axios";

const initialState = {
    nfOriginals: {
        status: "idle",
        error: null,
        data: null
    },
    nfWebSeries: {
        status: "idle",
        error: null,
        data: null
    },
    nfOnTheAirSeries: {
        status: "idle",
        error: null,
        data: null
    },
    nfAiringTodaySeries: {
        status: "idle",
        error: null,
        data: null
    }

}


export const fetchNetflixOrignals = createAsyncThunk(
    'tv/fetchNetflixOrignals',
    async () => {
        const response = await axios.get(requests.getNetflixOrignals)
        return response.data
    }
)
export const fetchTopRatedSeries = createAsyncThunk(
    'tv/fetchTopRatedSeries',
    async () => {
        const response = await axios.get(requests.getTv(endpoints.topRated))
        return response.data
    }
)
export const fetchOnTheAirSeries = createAsyncThunk(
    'tv/fetchOnTheAirSeries',
    async () => {
        const response = await axios.get(requests.getTv(endpoints.onTheAir))
        return response.data
    }
)
export const fetchAiringTodaySeries = createAsyncThunk(
    'tv/fetchAiringTodaySeries',
    async () => {
        const response = await axios.get(requests.getTv(endpoints.airingToday))
        return response.data
    }
)



export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNetflixOrignals.pending, (state, action) => {
                state.nfOriginals.status = 'loading';
            })
            .addCase(fetchNetflixOrignals.fulfilled, (state, action) => {
                state.nfOriginals.status = 'success';
                state.nfOriginals.data = action.payload;
            })
            .addCase(fetchNetflixOrignals.rejected, (state, action) => {
                state.nfOriginals.status = 'failed';
                state.nfOriginals.error = action.error;
            })
            .addCase(fetchTopRatedSeries.pending, (state, action) => {
                state.nfWebSeries.status = 'loading';
            })
            .addCase(fetchTopRatedSeries.fulfilled, (state, action) => {
                state.nfWebSeries.status = 'success';
                state.nfWebSeries.data = action.payload;
            })
            .addCase(fetchTopRatedSeries.rejected, (state, action) => {
                state.nfWebSeries.status = 'failed';
                state.nfWebSeries.error = action.error;
            })
            .addCase(fetchOnTheAirSeries.pending, (state, action) => {
                state.nfOnTheAirSeries.status = 'loading';
            })
            .addCase(fetchOnTheAirSeries.fulfilled, (state, action) => {
                state.nfOnTheAirSeries.status = 'success';
                state.nfOnTheAirSeries.data = action.payload;
            })
            .addCase(fetchOnTheAirSeries.rejected, (state, action) => {
                state.nfOnTheAirSeries.status = 'failed';
                state.nfOnTheAirSeries.error = action.error;
            })
            .addCase(fetchAiringTodaySeries.pending, (state, action) => {
                state.nfAiringTodaySeries.status = 'loading';

            })
            .addCase(fetchAiringTodaySeries.fulfilled, (state, action) => {
                state.nfAiringTodaySeries.status = 'success';
                state.nfAiringTodaySeries.data = action.payload;
            })
            .addCase(fetchAiringTodaySeries.rejected, (state, action) => {
                state.nfAiringTodaySeries.status = 'failed';
                state.nfAiringTodaySeries.error = action.error;
            })
    }

});
export const nfOriginalsSelector = (state) => state.tv.nfOriginals;
export const nfWebSeriesSelector = (state) => state.tv.nfWebSeries;
export const nfOnTheAirSeriesSelector = (state) => state.tv.nfOnTheAirSeries;
export const nfAiringTodaySeriesSeletor = (state) => state.tv.nfAiringTodaySeries;
export default tvSlice.reducer;