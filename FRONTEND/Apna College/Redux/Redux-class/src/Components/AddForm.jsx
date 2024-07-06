import {useState}from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";
export default function AddForm(){
    let[task,setTask]=useState("");
    let dispatch = useDispatch();

    let handleSubmit=(ev)=>{
        ev.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        dispatch(deleteTodo(task));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(ev)=>setTask(ev.target.value)} />
            <button>Add Task</button>
        </form>
    );
}