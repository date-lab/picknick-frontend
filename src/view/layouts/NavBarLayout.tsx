import { NavBarWrap } from "./NavBarCSS";
import { MdHomeFilled } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";

const NavBar = () => {
  return (
    <NavBarWrap>
      <MdHomeFilled style={{ fontSize: "37px", color: "#F46E46" }} />
      <FaTrash />
      <BsBookmarkFill />
      <HiUser style={{ fontSize: "35px" }} />
    </NavBarWrap>
  );
};

export default NavBar;
