import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import KakaoPage from "../pages/KakaoPage";

const Router = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <BrowserRouter>
        {login ? (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/oauth/callback/kakao" element={<KakaoPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Router;
