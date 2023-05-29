import { createSlice } from "@reduxjs/toolkit";

const FavMovieSlice = createSlice({
    name:"favMovie",
    initialState:{
        favMovie:[]
    },
    reducers:{
        addMovie: (state, action)=>{
            const favmove= state.favMovie.find((e)=>e.imdbID===action.payload.imdbID)
            if(!favmove){
                state.favMovie.push(action.payload);
            }
        },
        deleteMovie: (state, action)=>{
            state.favMovie = state.favMovie.filter((movies)=>movies.imdbID !== action.payload);
        }
    }
})

export const { addMovie, deleteMovie } = FavMovieSlice.actions;
export const FavMovieReducer = FavMovieSlice.reducer;