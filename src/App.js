import logo from "./logo.svg";
import "./App.css";
import "./sb-admin-2.min.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Portal from "./Portal/Portal";
import Button from "./components/Buttons/Button";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="buttons" element={<Button />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
