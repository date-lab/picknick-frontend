import React, { useState } from "react";
import { NavBarWrap } from "./NavBarLayoutCSS";
import { MdHomeFilled } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";

const NavBar = () => {
  const [type, setType] = useState<string>("");

  return (
    <NavBarWrap>
      <MdHomeFilled onClick={() => setType("home")} className={type === "home" ? "active home" : "home"} />
      <FaTrash onClick={() => setType("trash")} className={type === "trash" ? "active trash" : "trash"} />
      <BsBookmarkFill onClick={() => setType("bookmark")} className={type === "bookmark" ? "active bookmark" : "bookmark"} />
      <HiUser onClick={() => setType("people")} className={type === "people" ? "active people" : "people"} />
    </NavBarWrap>
  );
};

export default NavBar;
