import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import InputSection from './components/InputSecion';
import Todo_List from './components/Todo_List';




function App()  {

  /**
   * input to store inputing the todo task
   * todo_list store the whole todo_list as well as subtasks inside the todo_list
   * todo_list structures [[name of todo_list, sub_task1, sub_task2], [name of todo_list_2, sub_task1, sub_task2]]
   * [[project, design, communication, work on it], [], []]
   */
  const [input, setInput] = React.useState("");
  const [Todo_list, setTodo_List] = React.useState([]);


  /*
  * this app has a Navigation Bar, a Input section and a Todo panel
  */
  return ( 
    <div className="App">
        <NavBar />
        <InputSection input={input} todo_list={Todo_list} setInput={setInput} setTodo_List={setTodo_List} />
        <Todo_List todo_list={Todo_list} setTodo_List={setTodo_List}/>
    </div>
  );
}

export default App;
