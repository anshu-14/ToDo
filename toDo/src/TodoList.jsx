

export function TodoList({todos,togg,del}){
  

  return (
    <>
      
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                   onChange={(e) => togg(todo.id, e.target.checked)}
                ></input>
                {todo.title}
              </label>
              <button
                 onClick={() => del(todo.id)}
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