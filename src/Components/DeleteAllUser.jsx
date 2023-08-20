import React from "react";
import { useDispatch } from "react-redux";
// import { clearAllUsers } from "../store/slice/UserSlice";
import { clearAllUsers } from "../store/actions";

const DeleteAllUser = () => {
const dispatch = useDispatch();
    const deleteAllUsers =()=>{
        dispatch(clearAllUsers());
    }
  return (
    <div>
      <button
        style={{
          backgroundColor: "red",
          height: "3.5rem",
          width: "15rem",
          fontSize: "larger",
          borderRadius: "5px",
          color: "Lavender",
          marginTop: "10px",
          cursor:'pointer'
        }}
      onClick={()=> deleteAllUsers()}>
        DeleteAllUser
      </button>
    </div>
  );
};

export default DeleteAllUser;
