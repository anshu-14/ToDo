import { useState } from "react";

export function NewTodoForm({onSubmit})
{
    const [newItem, setnewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if(newItem==="") return
        onSubmit(newItem)
        setnewItem("");
      }

    return (
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
    );
}