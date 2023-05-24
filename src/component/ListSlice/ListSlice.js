import { Slice, createSlice } from "@reduxjs/toolkit";

const listSlice= createSlice({
    initialState:{
        task: []
    },
    name:'task',
    reducers: {
        addTask: ( state, action ) =>{
            state.task = action.payload;
        },
        // deleteTask: ( state, action ) =>{

        // }
    }
})

export const { addTask } = listSlice.actions;
export const taskReducer = listSlice.reducer;