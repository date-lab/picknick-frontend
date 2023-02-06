import { BsBookmarkFill } from "react-icons/bs";

import { KeyWrodWrap, KeyWordItems, Bookmark, Surface, SurfaceIcon, Parking, ParkingIcon, SideMenuFood, SideMenuFoodIcon } from "./KeyWordLayouCSS";

const KeyWordLayout = () => {
  return (
    <KeyWrodWrap>
      <KeyWordItems>
        <Bookmark>
          <BsBookmarkFill />
        </Bookmark>
        <Surface>
          포장온리<SurfaceIcon>🎁</SurfaceIcon>
        </Surface>
        <Parking>
          주차가능<ParkingIcon>🚘</ParkingIcon>
        </Parking>
        <SideMenuFood>
          디저트 맛집<SideMenuFoodIcon>🍰</SideMenuFoodIcon>
        </SideMenuFood>
        <SideMenuFood>
          음료수 맛집<SideMenuFoodIcon>🍰</SideMenuFoodIcon>
        </SideMenuFood>
        <SideMenuFood>
          칼국수 맛집<SideMenuFoodIcon>🍰</SideMenuFoodIcon>
        </SideMenuFood>
        <SideMenuFood>
          탕수육 맛집<SideMenuFoodIcon>🍰</SideMenuFoodIcon>
        </SideMenuFood>
        <SideMenuFood>
          개발자 맛집<SideMenuFoodIcon>🍰</SideMenuFoodIcon>
        </SideMenuFood>
      </KeyWordItems>
    </KeyWrodWrap>
  );
};

export default KeyWordLayout;
