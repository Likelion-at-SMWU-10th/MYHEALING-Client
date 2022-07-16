import React from "react";
import Inform from "./Inform";
import Map from "./Map";
import Bottom from '../bottom/Bottom';

  function MapMain() {
    return (
        <>
            < Inform text="지도로 장소 찾기"></Inform>
                <Map />
            < Inform text="키워드로 장소 찾기"></Inform>
            <Bottom />
        </>
    );
  }
  
  export default MapMain;
  