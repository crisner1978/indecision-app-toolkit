import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/itemSlice";

const ItemAddForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      setError(true);
      return;
    }
    setError(false);
    setText("");
    dispatch(addItem({ text }));
  };

  return (
    <form className="form-inline my-3 text-center" onSubmit={onSubmit}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Add item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
      <button
        type="submit"
        className="btn btn-primary mb-2 d-inline-block mx-5">
        Submit
      </button>
      {error && <p>Field must be completed</p>}
    </form>
  );
};

export default ItemAddForm;
