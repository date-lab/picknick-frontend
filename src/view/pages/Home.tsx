import { useState } from "react";
import Splash from "../components/Splash";

const Home = () => {
  const [splash, setSplash] = useState<boolean>(true);

  setTimeout(() => {
    setSplash(false);
  }, 1000);
  if (splash) return <Splash />;
  return <div>홈</div>;
};

export default Home;
