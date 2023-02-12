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
} from "./LoginPageCSS";
import LoginLogo1 from "../assets/LoginLogo1.png";
import LoginLogo2 from "../assets/LoginLogo2.png";
import kakaoLoginBtnImg from "../assets/kaka_login_btn.png";

const Login = () => {
  const REST_API_KEY = "736ee0de974dbdf16ba7d5e0586ddf3f";
  const REDIRECT_URI = "http://localhost:5173/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
          <a href={KAKAO_AUTH_URL}>
            <KakaoLoginBtn src={kakaoLoginBtnImg} />
          </a>
        </KaKaoLoginWrap>
      </LoginHeader>
    </LoginWrap>
  );
};

export default Login;
