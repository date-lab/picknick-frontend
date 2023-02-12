import { useNavigate, useLocation } from "react-router-dom";

const KakaoPage = () => {
  const path = useNavigate();
  const REST_API_KEY = "736ee0de974dbdf16ba7d5e0586ddf3f";
  const REDIRECT_URI = "http://localhost:5173/oauth/callback/kakao";
  const url = new URL(window.location.href);
  const token = url.searchParams.get("code");

  interface KakaoKeyType {
    grant_type: string;
    client_id: string;
    redirect_uri: string;
    code: string | null;
  }

  const kakaoData: KakaoKeyType = {
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: token,
  };

  const kakaoAPI = Object.keys(kakaoData)
    .map((k) => encodeURIComponent(k) + "=" + encodeURI(kakaoData[k]))
    .join("&");
  fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: kakaoAPI,
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("kakao", data.access_token);
      return path("/home");
    });

  return <></>;
};

export default KakaoPage;
