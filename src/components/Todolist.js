import React from "react";
import TodoItem from "./TodoItem";

function Todolist({ items, clearList, deleteItem, updateItems }) {
  return (
    <>
      <ul className="list">
        <h3>Todo List</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              deleteItem={deleteItem}
              updateItems={updateItems}
            />
          );
        })}
        <button type="button" onClick={clearList}>
          Clear All
        </button>
      </ul>
    </>
  );
}
export default Todolist;
