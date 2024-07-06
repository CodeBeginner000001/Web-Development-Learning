import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/TodoSlice";
export default function TodoList() {
  const todo = useSelector((state) => state.todos);
  console.log(todo);
  let dispatch = useDispatch();

  const clickhandler=(id)=>{
    console.log("delete",id)
    dispatch(deleteTodo(id));
  }
  return (
    <>
      <AddForm />
      <h2>Todo List</h2>
      <ul>
        {todo.map((Todo) => (
          <li key={Todo.id}>{Todo.task}&nbsp;
          <button onClick={()=>clickhandler(Todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
