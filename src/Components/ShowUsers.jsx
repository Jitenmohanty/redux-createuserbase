import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import { removeUser } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";

const ShowUsers = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state.user;
  });
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <Wrapper>
      {userData.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button
              className=" btn-delete"
              onClick={() => {
                deleteUser(id);
              }}
            >
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default ShowUsers;

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 10px;
    border-bottom: 1px solid #eee;
    &:first-child {
    }
  }
`;
