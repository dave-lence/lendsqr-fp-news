import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./Redux/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
