import { useState } from "react";
import "./styles.css";
import { ToDoInput } from "./Components/ToDoInput";
import { ItemList } from "./Components/ItemList";
export default function App() {
  const [listToDo, setListToDo] = useState([]);
  let addList = (inputText) => {
    setListToDo([...listToDo, inputText]);
  };
  // console.log(listToDo);
  const deleteListItem = (key) => {
    let newListToDo = [...listToDo];
    newListToDo.splice(key, 1);
    setListToDo([...newListToDo]);
  };
  return (
    <div className="App">
      <div className="mainContainer">
        <ToDoInput addList={addList} />
        <hr />
        {listToDo.map((listItem, index) => {
          return (
            <ItemList
              key={index}
              index={index}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}
