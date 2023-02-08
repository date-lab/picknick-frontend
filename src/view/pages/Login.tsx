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
  // const params = new URLSearchParams(location.search);
  // const auth = params.get("code");

  // 현재의 문제 인가코드 발급 후 POST 요청처리에서 오류 발생.

  // useEffect(() => {
  //   fetch("https://kauth.kakao.com/oauth/token", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       grant_type: "authorization_code",
  //       client_id: REST_API_KEY,
  //       redirect_uri: REDIRECT_URI,
  //       code: auth,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.access_token) {
  //         localStorage.setItem("카카오API", data.access_token);
  //         alert("카카오 로그인 성공 !!");
  //         console.log(data.access_token);
  //         navi("/");
  //       }
  //     });
  // }, []);

  // useEffect(() => {
  //   if (auth) {
  //     alert("dd");
  //   } else {
  //     navi("/login");
  //   }
  // }, []);

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
