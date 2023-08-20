import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../store/slice/UserSlice";

const DeleteAllUser = () => {
const dispatch = useDispatch();
    const deleteAllUsers =()=>{
        dispatch(DeleteUser());
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
