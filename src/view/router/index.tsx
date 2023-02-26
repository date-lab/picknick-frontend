import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import KakaoPage from "../pages/KakaoPage";

const Router = () => {
  const [login, setLogin] = useState(true);

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
            <Route path="/*" element={<Login />} />
            <Route path="/oauth/callback/kakao" element={<KakaoPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Router;
