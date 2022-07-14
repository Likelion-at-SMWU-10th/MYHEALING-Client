import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

function NaverMapComponent() {
  const navermaps = window.naver.maps;

  return (
    <NaverMap
      mapDivId={"react-naver-map"}
      style={{
        width: "910px",
        height: "361px",
        margin: "10px 10px 10px 60px",
      }}
      //   defaultCenter={{ lat: 37.54450959, lng: 126.96583122 }}   숙대
      defaultCenter={{ lat: 37.52188439, lng: 126.97968512 }}
      defaultZoom={15}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.52366774, 126.98035075)}
        animation={2}
        onClick={() => {
          alert("여기는 국립중앙박물관입니다.");
        }}
      />
    </NaverMap>
  );
}

function Map() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"8e3uzcshh4"}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapComponent />
    </RenderAfterNavermapsLoaded>
  );
}

export default Map;
