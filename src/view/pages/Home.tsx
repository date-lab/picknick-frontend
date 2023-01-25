import { useState } from "react";
import Splash from "../components/Splash";
import NavBar from "../components/NavBar";
import { HomeWrap } from "../pages/HomeCSS";

const Home = () => {
  const [splash, setSplash] = useState<boolean>(true);

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <Splash />;

  return (
    <HomeWrap>
      여기가 로그인했을때 사용자의 홈(지도, 검색, 배경 검은색은 일시적으로 해둠 등등)
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
