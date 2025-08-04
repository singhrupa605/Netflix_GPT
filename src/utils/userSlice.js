import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: true, // <-- Start with true until Firebase resolves
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.loading = false;
    },
    setLoading : (state, action)=>
    {
        state.loading = action.payload
    }
  },
});

export const { addUser, removeUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
