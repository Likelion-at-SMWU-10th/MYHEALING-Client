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
import SearchPlaceByName from "./page/map/SearchPlaceByName";
import SearchList from "./page/map/SearchList";
import PostGuide from "./page/memories/PostGuide";
import PostMemories from "./page/memories/PostMemories";
import MyPage from "./page/myPage/MyPage";
import IntroPage from "./page/intro/IntroPage";
import SearchPlaceByGu from "./page/map/SearchPlaceByGu";

const apiUrl = "http://127.0.0.1:8000/";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/map" element={<MapMain />}></Route>
        <Route path="/intro" element={<IntroPage />}></Route>
        <Route path="/mem" element={<MemMain />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route
          path="/writerandom"
          element={<WriteRandom apiUrl={apiUrl} />}
        ></Route>
        <Route
          path="/writetoday"
          element={<WriteMemories apiUrl={apiUrl} />}
        ></Route>
        <Route
          path="/writeguide"
          element={<WriteGuide apiUrl={apiUrl} />}
        ></Route>
        <Route
          path="/postGuide"
          element={<PostGuide apiUrl={apiUrl} />}
        ></Route>
        <Route
          path="/postMemories"
          element={<PostMemories apiUrl={apiUrl} />}
        ></Route>
        <Route path="/searchplace" element={<SearchPlace />}></Route>
        <Route
          path="/searchplacebyname"
          element={<SearchPlaceByName />}
        ></Route>
        <Route path="/searchlist" element={<SearchList />}></Route>
        <Route path="/searchplacebygu" element={<SearchPlaceByGu />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
