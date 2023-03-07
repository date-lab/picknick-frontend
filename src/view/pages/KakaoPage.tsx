import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginType {
  setLoggedFunc: (login: string) => void;
}

const KakaoPage = (props: LoginType) => {
  const path = useNavigate();
  const REST_API_KEY = "736ee0de974dbdf16ba7d5e0586ddf3f";
  const REDIRECT_URI = "http://localhost:5173/oauth/callback/kakao";
  const url = new URL(window.location.href);
  const token = url.searchParams.get("code");

  // 토큰 발급 후 해당 API로 유저 토큰 전송
  const auth = async (accessToken: string) => {
    const AUTH_API = `https://sj100700.cafe24.com/picknic/api/auth.php?access_token=${accessToken}`;

    await fetch(AUTH_API, {
      method: "POST",
    });
  };

  //Record Read Only

  const kakaoData: Record<string, string> = {
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: token ? token : "",
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
      props.setLoggedFunc("kakao-login");
      sessionStorage.setItem("kakao-login", data.access_token);
      auth(data.access_token);
      return path("/");
    });

  return <></>;
};

export default KakaoPage;
