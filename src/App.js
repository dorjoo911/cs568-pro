import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Panel from "./components/Panel";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/user/User";
import Users from "./components/user/Users";
import Test from "./components/Test";

axios.defaults.baseURL = "http://localhost:3000";
function App() {
  return (
    <div className="App">
      <Header headerText="Project: CS-568 "></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Panel />} />
          <Route path="/dashboard" element={<Test />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id/edit" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<p>Page Not Found ... !!!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
