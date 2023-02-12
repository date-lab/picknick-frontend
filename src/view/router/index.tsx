import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import KakaoPage from "../pages/KakaoPage";
import { useEffect } from "react";

const Router = () => {
  const login = localStorage.getItem("kakao");
  useEffect(() => {
    <Router />;
  }, [login]);
  return (
    <div>
      <BrowserRouter>
        {login ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/oauth/callback/kakao" element={<KakaoPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Router;
