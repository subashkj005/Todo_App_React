import React,{useState} from "react";

export default function TodoForm({createTodo}){

    const [input, setInput] = useState('')

    const todoSubmit = e => {
        e.preventDefault()
        createTodo(input)
        setInput('')
    }

    return(
        <form className="TodoForm" onSubmit={todoSubmit}>
            <input className="todo-input" value={input} type="text" onChange={e=> setInput(e.target.value)}/>
            <button className="todo-btn" type="submit"  >Add Todo</button>
        </form>
    )
}