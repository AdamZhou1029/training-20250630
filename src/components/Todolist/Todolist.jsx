import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
console.log("hello world");
/* 
    controlled component
        2 way data binding
    uncontrolled component


    spread operator: make shallow copy of existing array by creating a new array
*/

const arr = [1, [2, 3]];
const arr1 = [...arr];
//structuredClone
const arr2 = structuredClone(arr); // deep copy
//const arr2 = JSON.parse(JSON.stringify(arr)) // deep copy
console.log(arr[1] === arr1[1], arr[1] === arr2[1]); //true, shallow

const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [todolist, setTodolist] = useState([]);
    const handleChange = (event) => {
        //synthetic event: cross platform compatibility
        console.log("event", event, event.target.value);
        setInputValue(event.target.value);
    };
    const handleSubmit = () => {
        const newTodoItem = { id: uuidv4(), title: inputValue };
        //todolist.push(newTodoItem);
        /* 
            1. mutating value(prohibited)
            2. not triggering rendering
        */

        const newTodolist = [...todolist];
        newTodolist.push(newTodoItem);
        setTodolist(newTodolist);
        setInputValue("");
    };

    const handleDelete = (id) => {
        //filter: callback,
        //splice: index,

        const filteredList = todolist.filter((todo) => todo.id !== id);
        setTodolist(filteredList);
    };
    return (
        <div>
            <div>
                <input id="123" value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>submit</button>
            </div>
            <div>
                <ul>
                    {todolist.map((item, index) => (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <button onClick={() => handleDelete(item.id)}>
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todolist;
