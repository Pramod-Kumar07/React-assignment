import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    todoList:   [
        { id: 1,
         content: "Add New Task" },
     ]
  },
  reducers: {
    addToDo: (state, action) => {
        let newTodoList = {   
            id: Math.random(),
            content: action.payload.newContent
        }
        state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    }
  },
})

export const { addToDo, deleteToDo, editTodo } = toDoSlice.actions

export default toDoSlice.reducer;