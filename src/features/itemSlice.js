import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Moe's" },
  { id: 2, text: "Chipotle" },
  { id: 3, text: "Chick-fil-a" },
]

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const newItem = {
        id: nanoid(),
        text: payload.text,
      };
      state.push(newItem);
    },
    deleteItem: (state, { payload }) => {
      return state.filter(({id}) => id !== payload);
    },
  },
});

export const { addItem, deleteItem } = itemSlice.actions;

export const selectItems = ({ items }) => items;

export default itemSlice.reducer;
