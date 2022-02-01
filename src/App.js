import Home from "./Home";
import Users from "./Users";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CustomForm from "./Form";

const theme = {
  colors: {
    success: "blue",
    error: "red",
    info: "green",
    warning: "orange"
  }
};

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="users" element={<Users />} />
            <Route path="form" element={<CustomForm />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
