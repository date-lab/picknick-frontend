import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineLocationSearching } from "react-icons/md";

import { SettingWrap, LocationBtnIcons, MenuBtnIcons } from "./SettingLayoutCSS";

const SettingLayout = ({ getCurrentPosBtn }: any) => {
  return (
    <SettingWrap>
      <LocationBtnIcons>
        <MdOutlineLocationSearching onClick={getCurrentPosBtn} />
      </LocationBtnIcons>
      <MenuBtnIcons>
        <TfiMenuAlt />
      </MenuBtnIcons>
    </SettingWrap>
  );
};

export default SettingLayout;
