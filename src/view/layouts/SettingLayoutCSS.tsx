import styled from "styled-components";

export const SettingWrap = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 80px;
  padding: 0 25px;
  font-size: 23px;
  box-sizing: border-box;
`;

export const LocationBtnIcons = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 7px 7px;
  border-radius: 25px;
  box-sizing: border-box;
  cursor: pointer;

  .active {
    color: blue;
  }
`;

export const MenuBtnIcons = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 7px 7px;
  border-radius: 25px;
  box-sizing: border-box;
  cursor: pointer;
`;
