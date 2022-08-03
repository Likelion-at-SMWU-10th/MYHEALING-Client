import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Menubar from "./page/Menbar";
import MapMain from "./page/map/MapMain";
import SearchPlace from "./page/map/SearchPlace";
import Login from "./page/login/Login";
import MemMain from "./page/memories/MemMain";
import WriteRandom from "./page/memories/WriteRandom";
import WriteMemories from "./page/memories/WriteMemories";
import WriteGuide from "./page/memories/WriteGuide";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/map" element={<MapMain />}></Route>
        <Route path="/mem" element={<MemMain />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/writerandom" element={<WriteRandom />}></Route>
        <Route path="/writetoday" element={<WriteMemories />}></Route>
        <Route path="/writeguide" element={<WriteGuide />}></Route>
        <Route path="/searchplace" element={<SearchPlace />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
