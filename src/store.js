import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './Reducers/toDoSlice';

export default configureStore({
  reducer: {
      toDo: toDoReducer
  },
})