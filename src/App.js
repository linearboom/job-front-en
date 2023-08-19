import "./App.css";
import { Route, Routes, useHistory } from "react-router-dom";

import GuestTopperNav from "./Guest/Topper/GuestTopperNav";
import Login from "./Guest/Login/Login";

function App() {
  return (
    <div className="App">
      <GuestTopperNav></GuestTopperNav>
      <Routes>
        <Route exact path="/" element={<h1>HELLO</h1>} />
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
