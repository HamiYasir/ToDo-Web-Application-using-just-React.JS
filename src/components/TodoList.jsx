import { TodoCard } from "./TodoCard";

// This will display the todo list
export function TodoList(props){
    const { todos } = props;

    const tab = 'All';
    const filter_todo_list = tab === 'All' ?
        todos :
        tab === 'Completed' ? 
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete) 

    return(
        <>
            {filter_todo_list.map((todo, todo_index)=>{
                return(
                    <TodoCard 
                        key={todo_index} 
                        todo={todo}/> 
                )
            })}
        </>
    )
}