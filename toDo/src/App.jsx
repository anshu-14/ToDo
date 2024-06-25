import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setnewItem] = useState("");
  const [todos, setnewtodos] = useState(()=>{
      const localvalue=localStorage.getItem("todos");   
      if(localvalue==null) return []

      return JSON.parse(localvalue)
  });

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  function handleSubmit(e) {
    e.preventDefault();
    setnewtodos((currenttodos) => {
      return [
        ...currenttodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setnewItem("");
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => {
              setnewItem(e.target.value);
            }}
            type="text"
            id="item"
          ></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggletodo(todo.id, e.target.checked)}
                ></input>
                {todo.title}
              </label>
              <button
                onClick={() => deleteItem(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
