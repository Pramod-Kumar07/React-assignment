import React, { useState, useEffect } from "react";
import Heading from "../atoms/Heading";
import styles from "./TodoList.module.css";
import List from "../atoms/List";
import InputTask from "../molecules/InputTask";

function TodoList() {
    const [list, setList] = useState([{
        task:"Add Tasks",
        isComplete:false
    }]);
    const [pendingTasks, setPendingTasks]=useState(1)

    useEffect(()=>{
        setPendingTasks(list.filter((tasks)=>!tasks.isComplete).length)
    },[list])

    function addList(inputTask){
        if(inputTask !==''){
            setList([...list, {task:inputTask, isComplete:false}])
        }
    }

    function completion (i, value){
        let newList=[...list];
        newList[i].isComplete=value;
        setList([...newList]);
    }

    function deleteItem(key){
        let newList= [...list];
        newList.splice(key,1);
        setList([...newList])
    }

    return(
        <div className={styles.container}>
        <Heading numTask={pendingTasks}/>
        <div>
            {
                list.map((listItem,i)=>{
                    return(
                        <List key={i} index={i} item={listItem.task} deleteItem={deleteItem} completion={completion} check={listItem.isComplete}/>
                    )
                })
            }
        </div>
        <br/>
        <InputTask addList={addList}/>
        </div>
    )
}

export default TodoList;