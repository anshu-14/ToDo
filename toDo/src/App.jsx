import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {

  const [todos, setnewtodos] = useState(() => {
    const localvalue = localStorage.getItem("todos");
    if (localvalue == null) return [];

    return JSON.parse(localvalue);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
function addtodo(title) {
  setnewtodos((currenttodos) => {
    return [
      ...currenttodos,
      { id: crypto.randomUUID(), title, completed: false },
    ];
  });
}
  function deleteItem(id)
  {
   setnewtodos((currenttodos) => {
    return currenttodos.filter(todo=>todo.id!=id)
   })
  }
  function toggletodo(id,completed)
  {
    setnewtodos(currenttodos=>{
      return currenttodos.map(todo=>{
        if(todo.id===id){
          return {...todo,completed:completed};
        }
        else{
          return todo
        }
      })
    })
  }
  return (
    <>
     <NewTodoForm onSubmit={addtodo}/>
     <h1 className="header">ToDo List</h1>
      <TodoList  todos={todos} togg={toggletodo} del={deleteItem}/>
    </>
  );
}
