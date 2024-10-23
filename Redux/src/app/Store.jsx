import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counterslice"; 

export const store = configureStore({
  reducer: {
    CounterKey: counterReducer,
  },
});
