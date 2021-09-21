import React, { useState } from "react";
import ItemAddForm from "./components/ItemAddForm";
import ItemList from "./components/ItemList";
import RandomButton from "./components/RandomButton";
import { useSelector } from "react-redux";
import { selectItems } from "./features/itemSlice";

function App() {
  const items = useSelector(selectItems);
  const [pick, setPick] = useState("");

  const randomItem = () => {
    let index = Math.floor(Math.random() * items.length);
    setPick(items[index].text);
  };

  return (
    <div className="container bg-white p-4 mt-5" style={{width: 450}}>
      <div className="container d-flex justify-content-between">
        <h3>Find My Decision</h3>
        <RandomButton
          randomItem={randomItem}
          disable={items.length === 0}
          pick={pick}
        />
      </div>
      <ItemAddForm />
      <ItemList />
    </div>
  );
}

export default App;
