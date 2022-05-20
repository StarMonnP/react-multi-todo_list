import React from "react";
import { Card, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import plus_sign from "./plus_sign.png"
import garbage_can from './garbage_can.png'
import check_mark from './check_mark.png'
import Todo from './Todo';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

/**
 * Todo_List component has a panel of list of todo-list each todo-list contains sub todo-list
 * @param {*} props 
 *      todo_list -> todo-list data from parent class
 *      setTodo_List -> set todo-list functions
 * @returns 
 */
function Todo_List(props)  {

// use for input of the subtasks
const [input, setInput] = React.useState("");

// when user hit enter, values add to the subtasks array
// adds new subtask to the array
function addnewTask (e, index) {
    if(e.key === 'Enter'){
        setInput("");
        const newTodo = props.todo_list.slice();
        newTodo[index].push(input);
        props.setTodo_List(newTodo);
    }
}

/**
 * deleteCheck(index)
 * this function check whether the user wants to delete before deleting the item
 * @param {*} index index of the todo-list
 */
function deleteCheck(index) {

    const current_todo = props.todo_list[index][0];
    const msg = "You are deleting: " + current_todo;

    confirmAlert({
      title: msg,
      message: "",
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteTask(index)
        },
        {
          label: 'No',
        }
      ]
    });
  };


  /**
    * CompleteCheck(index)
    * this function check whether the user wants to complete before completing the item
    * @param {*} index index of the todo-list
   */
function CompleteCheck(index) {

    const current_todo = props.todo_list[index][0];
    const msg = "You are completing: " + current_todo;

    confirmAlert({
      title: msg,
      message: "",
      buttons: [
        {
          label: 'Yes',
          onClick: () => compTask(index)
        },
        {
          label: 'No',
        }
      ]
    });
  };

/**
 * deleteTask(index)
 * this function delete the item using the index provided 
 * @param {*} index index of the todo-list
 */
function deleteTask (index) {
    const newTodo = [...props.todo_list];
    newTodo.splice(index, 1);
    props.setTodo_List(newTodo);
}

/**
 * compTask(index)
 * this function complete the item using the index provided 
 * @param {*} index index of the todo-list
 */
function compTask (index) {
    const newTodo = [...props.todo_list];
    newTodo.splice(index, 1);
    props.setTodo_List(newTodo);
}

/**
 * this popover pops when the button is onclick
 * input is inside the popover
 * key enter after inputing add new task to todo-list
 * @param {*} index index of the todo-list
 * @returns 
 */
const popover =(index)=> (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Enter Task</Popover.Header>
    <Popover.Body>
      <input className='input_field' value={input||""} onChange={(e) => setInput(e.target.value)} 
        onKeyDown={(e) => addnewTask(e, index)} ></input>
    </Popover.Body>
  </Popover>
);




return ( 

    <div className="Todo_plane" >
        <div className="Todo_sec">
       
            {/* todo-list maps a Card view to create a card view for each item */}
            {props.todo_list.map((text, index) =>
                
                <Card className='Todo_box' key={index}>
                    <Card.Body>
                        <div className="Card_btn">
                            <OverlayTrigger trigger="click" placement="top" overlay={popover(index)}>
                                <Button variant="outline-primary" title="add new task">
                                    <img className='img_btn' src={plus_sign}></img>
                                </Button>
                            </OverlayTrigger>
                        
                            <Button variant="outline-primary" title="delete this task" onClick={() => deleteCheck(index)}>
                                <img className='img_btn' src={garbage_can}></img>
                            </Button>

                            <Button variant="outline-primary" title="finish this task" onClick={() => CompleteCheck(index)}>
                                <img className='img_btn' src={check_mark}></img>
                            </Button>
                        </div>
                        <span className="arw">{Array.isArray(text) ? text[0] : text}</span>
                        {/* here calls Todo component to create sub tasks under the todo task */}
                        <Todo todo_list={props.todo_list} p_index={index} setTodo_List={props.setTodo_List} />
                    </Card.Body>
                </Card>
             )}
        </div>
    </div>
   
  );
}

export default Todo_List;