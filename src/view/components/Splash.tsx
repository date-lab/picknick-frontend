import react from "react";
import Logo from "../assets/logo.png";
import { ImgWrap, SplashImg } from "../components/SplashCSS";

const Splash = () => {
  return (
    <ImgWrap>
      <SplashImg src={Logo} />
    </ImgWrap>
  );
};

export default Splash;
