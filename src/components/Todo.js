import React from "react";
import {Dropdown, Popover, OverlayTrigger, Button} from 'react-bootstrap'

/**
 * Todo component creates a list of sub todo-list
 * @param {*} props 
 * @returns 
 */

function Todo(props)  {

// subTodo -> a list of sub todo from todo-list
const subTodo = props.todo_list[props.p_index].slice(1);

/* 
 * crossOut cross out the component when clicked
 */
const crossOut = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };

/**
 * deleteSubTask(index)
 * this function delete a subtasks according to index provided
 * @param {*} index index of subTask 
 */
function deleteSubTask(index)
{
  const newTodo = [...props.todo_list];
  const name_subTodo = [newTodo[props.p_index][0]];

  const newSubTodo = [...subTodo];
  newSubTodo.splice(index, 1);
  //alert(newSubTodo);

  newTodo[props.p_index] = name_subTodo.concat(newSubTodo);
  props.setTodo_List(newTodo);
  
}


return ( 
    <div>
      {subTodo.map((text, index) => 
          <div className="todo_container" key={index}>
            <div className='text_btn_row'>
               <p className="todo_align_left" onClick={crossOut}>{text}</p> 
                  <Dropdown className='todo_align_right' >
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><div onClick={()=>deleteSubTask(index)}>Delete</div></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> 
            </div>
          </div>
            )}
    </div>
  );
}

export default Todo;