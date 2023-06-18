import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
  user: null,
  filter:""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  },
});

export const {setUser, clearUser, setFilter} = userSlice.actions

export default userSlice.reducer;
