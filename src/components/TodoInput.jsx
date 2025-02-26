import { useState } from 'react';

// This will contain the textbox to collect the todo from user and a button to add the todo
export function TodoInput(props){
    const { editMode ,handleAddTodo } = props;

    const [input, setInput] = useState('');
    
    function handleInput(event){
        setInput(event.target.value);
    }

    return(
        <div className="input-container">
            <input placeholder="Add task" value={input} onChange={handleInput}/>
            <button onClick={()=>{
                if(!input){return} 
                handleAddTodo(input)
                setInput('')
            }}> {/*The if condition exists so you can't create empty todos*/}
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}