import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import Messages from "../ui/Messages";
import { addMessage } from "../ui/Messages/reducer";
import { addOneUser, fetchUsers, reset } from "../Users/reducer";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
    dispatch(addMessage("reset all Users", "warning"));
  };

  return (
    <div className="home">
      <nav className="flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <div className="flex">
        <button onClick={() => dispatch(fetchUsers())}>Load</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => dispatch(addOneUser())}>Add</button>
      </div>
      <Outlet />
      <Messages />
    </div>
  );
}

export default Home;
