import {
  LoginWrap,
  LoginHeader,
  LoginHeaderTitle,
  LoginHeaderFirstTitle,
  LoginHeaderLastTitle,
  LoginHeaderDescTitle,
  LoginHeaderLogoImg,
  LogoImg1,
  LogoImg2,
  KaKaoLoginWrap,
  KakaoLoginBtn,
} from "../pages/LoginCSS";
import LoginLogo1 from "../assets/LoginLogo1.png";
import LoginLogo2 from "../assets/LoginLogo2.png";

const Login = () => {
  return (
    <LoginWrap>
      <LoginHeader>
        <LoginHeaderTitle>
          <LoginHeaderFirstTitle>Pick</LoginHeaderFirstTitle>
          <LoginHeaderLastTitle>nick</LoginHeaderLastTitle>
          <LoginHeaderDescTitle>오늘은 어디 카페 가야하지?</LoginHeaderDescTitle>
        </LoginHeaderTitle>
        <LoginHeaderLogoImg>
          <LogoImg1 src={LoginLogo1} />
          <LogoImg2 src={LoginLogo2} />
        </LoginHeaderLogoImg>
        <KaKaoLoginWrap>
          <KakaoLoginBtn onClick={() => alert("카카오로그인 기능 구현중")}>카카오 로그인</KakaoLoginBtn>
        </KaKaoLoginWrap>
      </LoginHeader>
    </LoginWrap>
  );
};

export default Login;
