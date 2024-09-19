import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import deliveryReducer from "./deliverySlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    delivery: deliveryReducer,
  },
});

export default store;
