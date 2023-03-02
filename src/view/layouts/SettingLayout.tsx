import { MdOutlineLocationSearching } from "react-icons/md";

import { SettingWrap, LocationBtnIcons } from "./SettingLayoutCSS";

const SettingLayout = ({ getCurrentPosBtn }: any) => {
  return (
    <SettingWrap>
      <LocationBtnIcons>
        <MdOutlineLocationSearching onClick={getCurrentPosBtn} />
      </LocationBtnIcons>
    </SettingWrap>
  );
};

export default SettingLayout;
