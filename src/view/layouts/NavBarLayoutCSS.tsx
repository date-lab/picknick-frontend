import styled from "styled-components";

export const NavBarWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #dadada;
  background-color: #ffffff;
  font-size: 27px;
  position: fixed;
  bottom: 0;
  z-index: 2;

  .home {
    font-size: 37px;
  }

  .people {
    font-size: 35px;
  }

  .home,
  .trash,
  .bookmark,
  .people {
    cursor: pointer;
  }

  .active {
    color: #f46e46;
  }
`;

export const HomeBtn = styled.button`
  background-color: white;
`;
