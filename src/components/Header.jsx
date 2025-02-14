export function Header(props){
    const { todos } = props; // Deconstructing the props sent from App.jsx
    const todos_length = todos.length;
    
    const is_tasks_plural = todos.length != 1;
    const task_or_tasks = is_tasks_plural ? 'tasks' : 'tasks';

    return(
        <header>
            <h1 className="text-gradient">You have {todos_length} open {task_or_tasks}.</h1>
        </header>
    )
}