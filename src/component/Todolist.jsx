import React from "react";


export default function Todolist({task,deleteTodo,todoComplete}){

    return (
        <div className="Todo">
            <p className={`${task.completed ? 'completed':''}`} 
            onClick={()=>{todoComplete(task.id)}}
            >{task.task}</p>
            <i className="fa-solid fa-trash" style={{ color: '#1A1A40' }} onClick={()=>{deleteTodo(task.id)}} ></i>
        </div>
    )
}