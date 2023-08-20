import {createSlice} from '@reduxjs/toolkit';

const UserSlice= createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        DeleteUser(state,action){
           return [];
        }
    }
})

export default UserSlice.reducer ;
export const {addUser,removeUser ,DeleteUser} = UserSlice.actions;