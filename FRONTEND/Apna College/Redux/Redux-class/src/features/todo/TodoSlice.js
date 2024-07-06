import { v4 as uuidv4 } from "uuid";
import { createSlice}from "@reduxjs/toolkit";
/*
nanoid works same as uuidv4 but the catch is we need not to install a separate npm package i.e., npm install uuidv4
*/
// import { createSlice , nanoid}from "@reduxjs/toolkit";

const initialState = {
    todos:[{ id:uuidv4(), task:"Demo-task", isDone:false}],
};

export const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{ //state,action
        addTodo:(state,action)=>{
            const newtodo={
                id:uuidv4(),
                task:action.payload,
                isDone:false
            };
            state.todos.push(newtodo); //direct mutation
        },
        deleteTodo:(state,action)=>{
            //action.paylod
           state.todos=state.todos.filter((todo)=>todo.id !== action.payload);
        },
        MarksAsDone:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone=true;
                }
            });
        },
    },
});

export const { addTodo , deleteTodo , MarksAsDone }=TodoSlice.actions;
export default TodoSlice.reducer;