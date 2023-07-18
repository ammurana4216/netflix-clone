import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requests } from "../../utlility/requests";
import axios from "../../utlility/axios";

const initialState = {
    nfOriginals: {
        status: "idle",
        error: null,
        data: null
    },
    nfWebSeries:{
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
        const response = await axios.get(requests.getNetflixOrignals)
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

    }

});
export const nfOriginalsSelector = (state) => state.tv.nfOriginals;
export const nfWebSeriesSelector = (state) => state.tv.nfWebSeries;

export default tvSlice.reducer;