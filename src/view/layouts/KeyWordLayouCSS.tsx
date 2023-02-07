import styled from "styled-components";

export const KeyWrodWrap = styled.div`
  width: 100%;
  height: 35px;
  position: absolute;
  top: 70px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  z-index: 2;
`;

export const KeyWordItems = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  overflow: auto;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Bookmark = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffde6a;
  font-size: 15px;
  margin: 0 10px;
  padding: 0 10px;
  border-radius: 100px;
  background-color: white;
`;

export const Surface = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 13px;
  margin-right: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: white;
  cursor: pointer;
  white-space: nowrap;
`;

export const SurfaceIcon = styled.span`
  position: relative;
  bottom: 3px;
  padding-left: 2px;
`;

export const Parking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 13px;
  margin-right: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: white;
  cursor: pointer;
  white-space: nowrap;
`;

export const ParkingIcon = styled.span`
  position: relative;
  bottom: 3px;
  padding-left: 2px;
`;

export const SideMenuFood = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 13px;
  margin-right: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: white;
  cursor: pointer;
  white-space: nowrap;
`;

export const SideMenuFoodIcon = styled.span`
  position: relative;
  bottom: 3px;
  padding-left: 2px;
`;
