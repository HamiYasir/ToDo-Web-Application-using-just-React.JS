// Component that displays the info in the todo
export function TodoCard(props){
    const { todo, handleDeleteTodo, todo_index } = props;

    return(
        <>
            <div className="card todo-item">
                <p>{todo.input}</p>
                <div className="todo-buttons">
                    <button disabled={todo.complete}>
                        <h6>Done</h6>
                    </button>
                    <button onClick={()=>{handleDeleteTodo(todo_index)}}>
                        <h6>Delete</h6>
                    </button>
                </div>
            </div>
        </>
    )
}