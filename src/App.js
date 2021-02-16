import TodoList from './list/TodoList'
import './App.css';
import AddTodo from './list/AddTodo';
import Edit from './modal/Edit'
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <AddTodo></AddTodo>
      <TodoList></TodoList> 
    </div>
  );
}

export default App;
