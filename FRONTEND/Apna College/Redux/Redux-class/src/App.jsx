import "./App.css";
import TodoList from "./Components/TodoList";
import { Provider } from "react-redux";
import {store} from "./app/store.js";
function App() {
  return (
    <>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
