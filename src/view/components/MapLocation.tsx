import { MapWrap } from "./MapLocationCSS";
import { useEffect } from "react";
import SettingLayout from "../layouts/SettingLayout";

const MapLocation = () => {
  let map: any;

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.498085526298865, 127.02761578022049),
      level: 3,
    };
    map = new kakao.maps.Map(container as HTMLElement, options);
    console.log(map);
  }, []);

  interface LocationCoordsType {
    coords: { latitude: number; longitude: number };
  }

  function locationLoadSuccess(pos: LocationCoordsType) {
    // 현재 위치 받아오기
    const currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    console.log(pos);
    // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
    map.panTo(currentPos);

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: currentPos,
    });
    marker.setMap(map);
  }

  const locationLoadError = () => alert("위치 정보를 가져오는데 실패했습니다.");

  // 위치 가져오기 버튼 클릭시
  const getCurrentPosBtn = () => navigator.geolocation.getCurrentPosition(locationLoadSuccess, locationLoadError);

  return (
    <MapWrap>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
      <SettingLayout getCurrentPosBtn={getCurrentPosBtn} />
    </MapWrap>
  );
};

export default MapLocation;
