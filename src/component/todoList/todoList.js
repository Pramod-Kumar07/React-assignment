import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../ListSlice/ListSlice';

function todoList() {

    const dispatch = useDispatch();

    const listState = useSelector((state)=> state.task)

  return (
    <div>todoList</div>
  )
}

export default todoList;