import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";


const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // clearAllUsers(state,action){
    //    return [];
    // }
  },
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

export default UserSlice.reducer;
export const { addUser, removeUser } = UserSlice.actions;
