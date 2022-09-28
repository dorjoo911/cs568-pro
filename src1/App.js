import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Panel from "./components/Panel";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/user/User";
import Users from "./components/user/Users";
// import Test from "./components/Test";
import UserInfo from "./components/user/UserInfo";
import UserEdit from "./components/user/UserEdit";

axios.defaults.baseURL = "http://localhost:3000";
function App() {
  return (
    <div className="App">
      <div>
        <Header headerText={`<<< CHAT ROOM >>>`}></Header>
        {<hr />}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Panel />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id/edit" element={<UserEdit />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users/:id/info" element={<UserInfo />} />
          <Route path="*" element={<p>Page Not Found ... !!!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
