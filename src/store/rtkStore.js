import { configureStore } from "@reduxjs/toolkit";
import { rtkCarsSlice } from "../slices/rtkCarsSlice";

const store = configureStore({
  reducer: {
    cars: rtkCarsSlice.reducer,
  },
});

export default store;
