import { useNavigate, useLocation } from "react-router-dom";

const KakaoPage = () => {
  const navi = useNavigate();
  const location = useLocation();
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
      console.log(data);
    });

  console.log(token);
  return <></>;
};

export default KakaoPage;
