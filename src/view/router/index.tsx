import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Router;
