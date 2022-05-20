import React from "react";
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';



/**
 * 
 * @param {*} props contains  
 * input -> to store the input of task
 * setInput -> set value for the input
 * todo_list -> the whole todo_list data
 * setTodo_List -> set the data to Todo_List (whole todo_list is modify everything something is chagned)
 *                      
 * @returns the input section with one button and popover display of input when button is onclicked
 */

function InputSection(props)  {

/**
 * handle the enter key when press
 * input of task is add to the todo list
 * adding todo -> copy the whole todo data, changing the value of it and put it back using setTodo_List
 * props.todo_list is the todo_list data from parent element
 * props.input is the input from parent element
 * @param {*} e contains key which is the events from the conponents
 */
function handle_keydown (e) {
    if(e.key === 'Enter'){
        props.setInput("");
        const newTodo = props.todo_list.slice();
        newTodo.push([props.input]);
        props.setTodo_List(newTodo);
    }
}

/**
 * popover is a function that pop out the element(input in this case)
 * pressing enter on the input field will add task into todo-list
 */
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Enter Task</Popover.Header>
      <Popover.Body>
        <input className='input_field' value={props.input||""} onChange={(e) => props.setInput(e.target.value)} 
            onKeyDown={(e) => handle_keydown(e)} ></input>
      </Popover.Body>
  </Popover>
);



return (
    <div className="input">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <Button className="btn_addTask" > +
        </Button>
        </OverlayTrigger>
    </div>
  );
}

export default InputSection;