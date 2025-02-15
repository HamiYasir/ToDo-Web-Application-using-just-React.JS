import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoList } from './components/TodoList';
import {TodoInput } from './components/TodoInput';

import { useState } from 'react';

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design!', complete: false },
  //   { input: 'Say hi to gran gran!', complete: true },
  // ]
  const [selected_tab, setSelectedTab] = useState('All');
  const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }]);

  function handleAddTodo(new_todo){
    const new_todo_list = [...todos, {input: new_todo, complete: false}]; /* The spread operator here makes it so that the new list is added to the end of existing list*/
    setTodos(new_todo_list);
  }


  function handleEditTodo(){

  }

  function handleDeleteTodo(index){
    let new_todo_list = todos.filter((val, val_index)=>{
      return val_index !== index;
    })
    setTodos(new_todo_list);
  }

  return (
   <>
      <Header todos={todos}/> {/* Sending the todos to bottom-level(Header component) using props */}
      <Tabs selected_tab={selected_tab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} selected_tab={selected_tab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
   </>
  )
}

export default App
