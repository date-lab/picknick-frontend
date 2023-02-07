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
import kakaoLoginBtnImg from "../assets/kaka_login_btn.png";

const Login = () => {
  const REST_API_KEY = "736ee0de974dbdf16ba7d5e0586ddf3f";
  const REDIRECT_URI = "http://localhost:5173/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLoginBt123n = async () => {
    await fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        grant_type: "authorization_code",
        client_id: "736ee0de974dbdf16ba7d5e0586ddf3f",
        redirect_uri: "http://localhost:5173/oauth/callback/kakao",
        code: "a4NmQALPXGgpqC4gcW2ifA2MbHmYwFcwjnaVkU1cZviwt4UdoywNanseva__oIVBJ3aUTwo9dGkAAAGGLBLu3Q",
      },
    });
  };
  console.log(KAKAO_AUTH_URL);

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
          <KakaoLoginBtn src={kakaoLoginBtnImg} onClick={handleKakaoLoginBt123n} />
        </KaKaoLoginWrap>
      </LoginHeader>
    </LoginWrap>
  );
};

export default Login;
