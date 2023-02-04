import { useState } from "react";
import Splash from "../components/Splash";
import NavBar from "../layouts/NavBarLayout";
import MapLocation from "../components/MapLocation";
import { HomeWrap } from "../pages/HomeCSS";

const Home = () => {
  const [splash, setSplash] = useState<boolean>(true);

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <Splash />;

  return (
    <HomeWrap>
      <MapLocation />
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
