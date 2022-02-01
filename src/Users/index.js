import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./reducer";
import User from "./User";

function Users() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  useEffect(() => {
    if (status === "iddle" || status === "complete") {
      dispatch(fetchUsers());
    }
  }, []); //eslint-disable-line
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      {users.map((user) => (
        <User key={user.login.uuid} {...user} />
      ))}
    </>
  );
}

export default Users;
