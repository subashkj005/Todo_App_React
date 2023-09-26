import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";
import {v4 as uuidv4} from 'uuid';


export default function Todo () {

    const [todos, setTodo] = useState([])

    const createTodo = (input) =>{
        // if todo is not empty
        if (input !== ''){
            // if todo is already added
            if (todos.find(todo=>todo.task === input)){
                alert('Todo already added..!')
                return           
            }else{
                setTodo([
                    ...todos,{id:uuidv4(), task:input, completed:false}
                ])
            }          
        }
    }

    const deleteTodo =(id)=>{
        setTodo(
            todos.filter(todo=>todo.id!==id)
        )
    }

    const todoComplete = (id) =>{
        setTodo(
            todos.map((todo)=>(
                todo.id === id ? {...todo, completed:!todo.completed } : todo
            ))
        )
    }

    return(
        <div className="TodoWrapper">
            <h1>Things to do!</h1>
            <TodoForm createTodo={createTodo}/>
            {todos.map((task)=>(
                <Todolist task={task} key={task.id} deleteTodo={deleteTodo} todoComplete={todoComplete} />
            ))}     
        </div>
    )
}