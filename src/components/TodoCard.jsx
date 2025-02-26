// Component that displays the info in the todo
import { useState } from "react";

export function TodoCard(props){
    const { todo, handleDeleteTodo, todo_index, handleMarkTodo, handleEditTodo } = props;

    const [edit_input, setEditInput] = useState('');

    return(
        <>
            <div className={"card todo-item "+(todo.edit ? "is-editing" : "")}>
                <p>{todo.input}</p>
                <div className="todo-buttons">
                    <button onClick={()=>{handleMarkTodo(todo_index)}} disabled={todo.edit || todo.complete}>
                        <h6>Done</h6>
                    </button>
                    <button onClick={()=>{
                        setEditInput(todo.input)
                        handleEditTodo(todo_index)
                    }} disabled={todo.edit || todo.complete}>
                        <h6>Edit</h6>
                    </button>
                    <button onClick={()=>{handleDeleteTodo(todo_index)}}>
                        <h6>Delete</h6>
                    </button>
                </div>
            </div>
            {todo.edit &&
                (<div className="input-container">
                    <input placeholder="Edit task" value={edit_input} onChange={(event)=>{setEditInput(event.target.value)}}/>
                    <button onClick={()=>{
                        if(!edit_input){
                            handleEditTodo(todo_index, todo.input);
                        }else{
                            handleEditTodo(todo_index, edit_input);
                        }
                        setEditInput('');
                    }}>
                        <p>Done</p>
                    </button>
                </div>)
            }
        </>
    )
}