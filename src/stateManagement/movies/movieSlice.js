import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../stateManagement/apis/omdbApi/apiUrl'
import { apiKey } from '../../stateManagement/apis/omdbApi/apiKey'


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async term => {
    const response = await movieApi.get(`?apiKey=${apiKey}&s=${term}&type=movie`)
    return response.data
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async term => {
    const response = await movieApi.get(`?apiKey=${apiKey}&s=${term}&type=series`)
    return response.data
})
export const fetchAsyncMovieOrShowDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowDetails', async id => {
    const response = await movieApi.get(`?apiKey=${apiKey}&i=${id}&Plot=full`)
    return response.data
})
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: {},
        shows: {},
        selectedMovieOrShow: {},
    },
    reducers: {
        removeSelectedMovieOrShow: state => { state.selectedMovieOrShow = {} },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('Fetched successfully')
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('Fetched successfully')
            return {...state, shows: payload}
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state, {payload}) => {
            console.log('Fetched successfully')
            return {...state, selectedMovieOrShow: payload}
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = state => state.movies.movies
export const getAllShows = state => state.movies.shows
export const getSelectedMovieOrShow = state => state.movies.selectedMovieOrShow
export default movieSlice.reducer