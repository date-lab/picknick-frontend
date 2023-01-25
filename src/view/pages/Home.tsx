import { useState } from "react";
import Splash from "../components/Splash";
import NavBar from "../components/NavBar";

const Home = () => {
  const [splash, setSplash] = useState<boolean>(true);

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <Splash />;

  return <div>홈</div>;
};

export default Home;
