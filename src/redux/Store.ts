import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice"; // Import your slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
});

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
