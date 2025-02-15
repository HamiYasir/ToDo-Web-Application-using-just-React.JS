import { TodoCard } from "./TodoCard";

// This will display the todo list
export function TodoList(props){
    const { todos, selected_tab } = props;

    const filter_todo_list = selected_tab === 'All' ?
        todos :
        selected_tab === 'Completed' ? 
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete) 

    return(
        <>
            {filter_todo_list.map((todo, todo_index)=>{
                return(
                    <TodoCard 
                        key={todo_index}
                        todo_index={todo_index} 
                        {...props}
                        todo={todo}/> 
                )
            })}
        </>
    )
}