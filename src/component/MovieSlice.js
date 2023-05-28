import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllMovies = createAsyncThunk(
    "movies/fetchAllMovies",
    async () => {
        const response= await axios.get("https://www.omdbapi.com/?s=action&apikey=efcccbcc&page=1");
        const moviesData= response.data.Search;
        return moviesData;
    }
)

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false
    },
    reducers: {
        setLoading: (state, action ) => {
            state.loading = action.payload;
        },
        addFav: (state = [{}], action)=> {
            const favourites={
                movies: action.payload,
                loading: false
            };
            state.includes(!action.payload) && state.push(favourites);
        },        
    },
    extraReducers: (builder)=> {
        builder.addCase(getAllMovies.fulfilled, (state, action)=>{
            state.movies = action.payload;
            state.loading = false;
        });
        builder.addCase(getAllMovies.rejected, (state, action)=>{
            state.movies= [];
            state.loading = false;

        });
        builder.addCase(getAllMovies.pending, (state, action)=>{
            console.log("action" , action);
        });
    }
});



export const { setLoading, addFav } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;