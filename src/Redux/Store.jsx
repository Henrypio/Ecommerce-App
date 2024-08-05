// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import itemReducer from "./ItemSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["auth/setUser"],
        ignoredPaths: ["auth.user"], // Adjust as necessary
      },
    }),
});
