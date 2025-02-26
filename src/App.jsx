import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoList } from './components/TodoList';
import {TodoInput } from './components/TodoInput';

import { useState, useEffect } from 'react';

function App() {
  const [selected_tab, setSelectedTab] = useState('All');
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  // const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', edit: true, complete: true }, { input: 'Hello! Add your first todo!', edit: false, complete: true }]);

  function handleAddTodo(new_todo){
    const new_todo_list = [...todos, {input: new_todo, edit: false, complete: false}]; /* The spread operator here makes it so that the new list is added to the end of existing list*/
    setTodos(new_todo_list);
    handleSavingToLocalStorage(new_todo_list);
  }

  function handleMarkTodo(index){
    // mark the todo as completed
    let new_todo_list = [...todos];
    let completed_todo = todos[index];
    completed_todo['complete'] = true; // Setting the todo to completed
    new_todo_list[index] = completed_todo;
    setTodos(new_todo_list);
    handleSavingToLocalStorage(new_todo_list);
  }

  function handleEditTodo(index, input){
    // edit the content of todo
    // console.log("Editing todo #"+index);
    let edit_todo_list = [...todos];
    let edit_todo = edit_todo_list[index];
    // Edit mode on
    if(!todos[index].edit){
      // console.log("Edit is true");
      edit_todo['edit'] = true;
      edit_todo_list[index] = edit_todo;
      // console.log("Todo #"+index+".edit: "+todos[index].edit);
    // Edit mode off
    }else{
      // console.log("Edit is false");
      // console.log(input);
      edit_todo['input'] = input;
      edit_todo_list[index] = edit_todo;
      edit_todo['edit'] = false;
      edit_todo_list[index] = edit_todo;
      // console.log("Todo #"+index+".edit: "+todos[index].edit);
    }
    setTodos(edit_todo_list);
    handleSavingToLocalStorage(edit_todo_list);
    // console.log("The todo list: "+"[input:"+todos[index].input,",", "edit:"+todos[index].edit,",", "complete:"+todos[index].complete+"]");
  }

  function handleDeleteTodo(index){
    let new_todo_list = todos.filter((val, val_index)=>{
      return val_index !== index;
    })
    setTodos(new_todo_list);
    handleSavingToLocalStorage(new_todo_list);
  }

  function handleSavingToLocalStorage(current_todos){
    localStorage.setItem('todo-app', JSON.stringify({ todos: current_todos }))
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')){return} /* todo-app is a unique key and should not be used for any other projects as it will result in overwriting localstorage */
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos);
  }, []);

  return (
   <>
      <Header todos={todos}/> {/* Sending the todos to bottom-level(Header component) using props */}
      <Tabs selected_tab={selected_tab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList editMode={editMode} setEditMode={setEditMode} handleMarkTodo={handleMarkTodo} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} selected_tab={selected_tab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
   </>
  )
}

export default App
