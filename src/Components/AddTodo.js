import React, { useState } from 'react';
import './AddToDo.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo } from '../Reducers/toDoSlice';

const AddTodo = () => {
   const dispatch = useDispatch();

  const { todoList } = useSelector((state) => state.toDo);

   const [ state, setState ] = useState({
       content: ''
   });

   const handleChange = (e) =>{
       setState({...state, content: e.target.value });
   }

   const add = () =>{
    let pattern = /\s/g;
    if(content.match(pattern) || !content){
        setState({...state, content: ''});
        return;
    }
    
    dispatch(addToDo({newContent: content}));
    setState({...state, content: ''});
   }
   const { content } = state;
  return( 
    <div className='form'>
      <h2>ToDo App</h2>
      <div className='input-container'>
      <input className='input' type='text' placeholder='Add Task...' value={content} onChange={handleChange}></input>
      <button type='button' className='button' onClick={add}>Add</button>
      </div>
      {
        <ul className='todos'>
        {
          todoList.map(({id, content})=> {
              return <li className='list' key={id}>
                  <span className='content'>{content}</span>
                  <span className='todo-action'>
                    <AiOutlineCloseCircle className="close" onClick={() => dispatch(deleteToDo({id}))}/>
                  </span>
              </li>
          }) 
        }
    </ul>}
  </div>
  )
}

export default AddTodo;