import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requests } from "../../utlility/requests";
import axios from "../../utlility/axios"; 

const initialState = {
    headerVideo: {
        status: "idle",
        error: null,
        data: null
    },

}


export const fetchHeaderDetails = createAsyncThunk(
    'tv/fetchHeaderDetails',
    async (type) => {
        const response = await axios.get(requests.getVideoDetails(type))
        return response.data
    }
)
// export const fetchTopRatedSeries = createAsyncThunk(
//     'tv/fetchTopRatedSeries',
//     async () => {
//         const response = await axios.get(requests.getTv(endpoints.topRated))
//         return response.data
//     }
// )
// export const fetchOnTheAirSeries = createAsyncThunk(
//     'tv/fetchOnTheAirSeries',
//     async () => {
//         const response = await axios.get(requests.getTv(endpoints.onTheAir))
//         return response.data
//     }
// )
// export const fetchAiringTodaySeries = createAsyncThunk(
//     'tv/fetchAiringTodaySeries',
//     async () => {
//         const response = await axios.get(requests.getTv(endpoints.airingToday))
//         return response.data
//     }
// )



export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderDetails.pending, (state, action) => {
                state.headerVideo.status = 'loading';
            })
            .addCase(fetchHeaderDetails.fulfilled, (state, action) => {
                state.headerVideo.status = 'success';
                state.headerVideo.data = action.payload;
            })
            .addCase(fetchHeaderDetails.rejected, (state, action) => {
                state.headerVideo.status = 'failed';
                state.headerVideo.error = action.error;
            })
        // .addCase(fetchTopRatedSeries.pending, (state, action) => {
        //     state.nfWebSeries.status = 'loading';
        // })
        // .addCase(fetchTopRatedSeries.fulfilled, (state, action) => {
        //     state.nfWebSeries.status = 'success';
        //     state.nfWebSeries.data = action.payload;
        // })
        // .addCase(fetchTopRatedSeries.rejected, (state, action) => {
        //     state.nfWebSeries.status = 'failed';
        //     state.nfWebSeries.error = action.error;
        // })
        // .addCase(fetchOnTheAirSeries.pending, (state, action) => {
        //     state.nfOnTheAirSeries.status = 'loading';
        // })
        // .addCase(fetchOnTheAirSeries.fulfilled, (state, action) => {
        //     state.nfOnTheAirSeries.status = 'success';
        //     state.nfOnTheAirSeries.data = action.payload;
        // })
        // .addCase(fetchOnTheAirSeries.rejected, (state, action) => {
        //     state.nfOnTheAirSeries.status = 'failed';
        //     state.nfOnTheAirSeries.error = action.error;
        // })
        // .addCase(fetchAiringTodaySeries.pending, (state, action) => {
        //     state.nfAiringTodaySeries.status = 'loading';

        // })
        // .addCase(fetchAiringTodaySeries.fulfilled, (state, action) => {
        //     state.nfAiringTodaySeries.status = 'success';
        //     state.nfAiringTodaySeries.data = action.payload;
        // })
        // .addCase(fetchAiringTodaySeries.rejected, (state, action) => {
        //     state.nfAiringTodaySeries.status = 'failed';
        //     state.nfAiringTodaySeries.error = action.error;
        // })
    }

});
export const headerVideoSelector = (state) => state.common.headerVideo;

export default commonSlice.reducer;