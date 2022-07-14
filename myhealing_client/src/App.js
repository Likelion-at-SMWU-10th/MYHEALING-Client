import React from "react";
import Map from "./page/map/Map";
import Inform from './page/map/Inform';
import Header from "./page/header/Header";
import Bottom from './page/bottom/Bottom';

function App() {
  return (
    <>
    <Header />
      < Inform text="지도로 장소 찾기"></Inform>
        <Map />
      < Inform text="키워드로 장소 찾기"></Inform>
    <Bottom />
    </>
  );
}

export default App;
