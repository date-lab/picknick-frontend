import { MapWrap } from "./MapLocationCSS";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect } from "react";

const MapLocation = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container as HTMLElement, options);
  }, []);
  return (
    <MapWrap>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
      {/* {" "}
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "100vh" }}>
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map> */}
    </MapWrap>
  );
};

export default MapLocation;
