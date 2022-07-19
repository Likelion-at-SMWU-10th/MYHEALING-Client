import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import MenuBar from "./page/Menubar";
import MapMain from "./page/map/MapMain";
import Login from "./page/login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuBar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/map" element={<MapMain />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
