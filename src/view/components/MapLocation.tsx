import { MapWrap } from "./MapLocationCSS";
import { useEffect, useState } from "react";
import SettingLayout from "../layouts/SettingLayout";

const MapLocation = () => {
  const [cafeLongLat, setCafeLongLat] = useState();
  const [info, setInfo] = useState(-1);
  // 카페 위치(위도, 경도), 카페이름 API URL
  const CAFE_API_LONGLAT = "https://sj100700.cafe24.com/picknic/map/get_cafe_longlat.php";
  let map: any;

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.498085526298865, 127.02761578022049),
      level: 3,
    };
    map = new kakao.maps.Map(container as HTMLElement, options);
    fetchData();
  }, []);

  // 카페 위치 데이터 타입지정
  interface CafeDataType {
    ca_name: string;
    ca_long: string;
    ca_lat: string;
  }

  const fetchData = async () => {
    const data = await fetch(CAFE_API_LONGLAT);
    const json = await data.json();
    // 데이터가 정상적으로 받아왔을때 json.success 값은 true
    // 각 카페 위치(위도, 경도)는 json.data
    setCafeLongLat(json.data);
    json.data.map((data: any, i: number) => {
      const markerPosition = new kakao.maps.LatLng(data.ca_lat, data.ca_long);
      const iwContent = `<div style="padding:5px;">${data.ca_name}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      console.log(json.data);

      // 마커설정
      marker.setMap(map);

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: data.ca_name,
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);

        // 지도상에 표시된 마커클릭시 가운데로 이동
        map.panTo(markerPosition);
      });
    });

    // // 데이터를 받아온 배열길이 만큼 반복문을 실행하여, 지도상에 카페 마커를 표시
    // for (let i = 0; i < json.data.length; i++) {
    //   const markerPosition = new kakao.maps.LatLng(json.data[i].ca_lat, json.data[i].ca_long);
    //   const iwContent = `<div style="padding:5px;">${json.data[i].ca_name}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    //   const marker = new kakao.maps.Marker({
    //     position: markerPosition,
    //   });

    //   // 마커설정
    //   marker.setMap(map);

    //   // 인포윈도우를 생성합니다
    //   var infowindow = new kakao.maps.InfoWindow({
    //     content: json.data[i].ca_name,
    //   });

    //   // 마커에 클릭이벤트를 등록합니다
    //   kakao.maps.event.addListener(marker, "click", function () {
    //     // 마커 위에 인포윈도우를 표시합니다
    //     infowindow.open(map, marker);

    //     // 지도상에 표시된 마커클릭시 가운데로 이동
    //     map.panTo(markerPosition);
    //   });
    // }
  };

  interface LocationCoordsType {
    coords: { latitude: number; longitude: number };
  }

  const locationLoadSuccess = (pos: LocationCoordsType) => {
    // 현재 위치 받아오기
    const currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
    map.panTo(currentPos);

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: currentPos,
    });
    marker.setMap(map);
  };

  // 위치정보를 못가져왔을때
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
