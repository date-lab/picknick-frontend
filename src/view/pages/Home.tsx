import { useState } from "react";
import { HomeWrap } from "../pages/HomeCSS";

// Components
import Splash from "../components/Splash";
import MapLocation from "../components/MapLocation";

// Layouts
import NavBar from "../layouts/NavBarLayout";
import SearchLayout from "../layouts/SearchLayout";
import SettingLayout from "../layouts/SettingLayout";
import KeyWordLayout from "../layouts/KeyWordLayout";

const Home = () => {
  const [splash, setSplash] = useState<boolean>(true);

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <Splash />;

  return (
    <HomeWrap>
      <SearchLayout />
      <KeyWordLayout />
      <MapLocation />
      <SettingLayout />
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
