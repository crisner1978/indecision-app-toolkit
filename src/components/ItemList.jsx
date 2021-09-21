import { useSelector } from "react-redux";
import { selectItems } from "../features/itemSlice";
import Item from "./Item";

const ItemList = () => {
  const items = useSelector(selectItems);
  return (
    <ul className="list-group">
      {items.length > 0 ? (
        items.map((item) => <Item id={item.id} text={item.text} />)
      ) : (
        <h4 className="text-center">Need more choices</h4>
      )}
    </ul>
  );
};

export default ItemList;
