import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [edit, setEdit] = useState({ id: "", value: false });
  const [id, setId] = useState(uuidv4());
  const [insert, setInsert] = useState([]);

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // setNew Items
    const newItem = {
      id: id,
      title: item,
    };

    // Update items
    const updated = [...items, newItem];
    setItems(updated);
    setItem("");
    setId(uuidv4());
    setEdit({ id: id, value: false });
  };

  // clear TodoList

  const clearList = () => {
    setItems([]);
  };

  // filter Items on basis of id
  const deleteItem = (id) => {
    const filterItems = items.filter((item) => item.id !== id);
    setItems(filterItems);
  };

  // const edit items

  const updateItems = (id, title) => {
    setInsert(items);
    deleteItem(id);
    setItem(title);
    setId(id);
    setEdit({ id: id, value: true });
  };

  // Insert At
  const insertAt = (e) => {
    e.preventDefault();
    let index = -1;
    for (let i = 0; i < insert.length; i++) {
      if (insert[i].id === edit.id) {
        index = i;
        break;
      }
    }
    const leftP = items.slice(0, index);
    const rightP = items.slice(index);
    const newArray = leftP.concat(
      { id: insert[index].id, title: item },
      rightP
    );

    setItems(newArray);
    setInsert([]);
    setItem("");
    setEdit({ id: id, value: false });
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <h1>Todo Input</h1>
      <Input
        item={item}
        setItem={setItem}
        handleSubmit={handleSubmit}
        edit={edit}
        insertAt={insertAt}
      />

      <Todolist
        items={items}
        clearList={clearList}
        deleteItem={deleteItem}
        updateItems={updateItems}
      />
    </div>
  );
}
