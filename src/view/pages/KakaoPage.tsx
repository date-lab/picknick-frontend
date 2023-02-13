import { useNavigate } from "react-router-dom";
import useStore from "../../store";

const KakaoPage = () => {
  const path = useNavigate();
  const REST_API_KEY = "736ee0de974dbdf16ba7d5e0586ddf3f";
  const REDIRECT_URI = "http://localhost:5173/oauth/callback/kakao";
  const url = new URL(window.location.href);
  const token = url.searchParams.get("code");

  // throw는 모든정보를 catch error로 내보내기 때문에, error의 타입을 알수가 없음

  if (token === null) return <div>로그인안됨</div>;

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
      const { setLogged, key } = useStore();
      setLogged(data.access.token);
      console.log(key);
      path("/");
    });

  return <></>;
};

export default KakaoPage;
