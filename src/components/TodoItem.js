import React from "react";

export default function TodoItem({ id, title, deleteItem, updateItems }) {
  return (
    <>
      <li className="itemFlex">
        <h4>{title}</h4>
        <div className="todo-icon">
          <span className="itemIcon" onClick={() => updateItems(id, title)}>
            <i className="fa fa-pen"></i>
          </span>

          <span className="itemIcon" onClick={() => deleteItem(id)}>
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </li>
    </>
  );
}
