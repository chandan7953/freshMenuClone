import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    addToDelivery(state, action) {
      const { id, name, quantity, price, category } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += quantity;
      } else {
        const newItem = { id, name, quantity, price, category };
        state.items.push(newItem);
      }
    },
    updateQuantity(state, action) {
      const { id, delta } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += delta;
        if (state.items[itemIndex].quantity <= 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    removeFromDelivery(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearDelivery(state) {
      state.items = [];
    },
  },
});

export const {
  addToDelivery,
  updateQuantity,
  removeFromDelivery,
  clearDelivery,
} = deliverySlice.actions;
export default deliverySlice.reducer;
