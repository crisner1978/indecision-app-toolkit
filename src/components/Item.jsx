import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../features/itemSlice";

const Item = ({ id, text }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item" key={Item.id}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">{text}</span>
        <button className="btn btn-danger" onClick={() => dispatch(deleteItem(id))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Item;
