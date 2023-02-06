import { useState } from "react";

import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineLocationSearching } from "react-icons/md";

import { SettingWrap, LocationBtnIcons, MenuBtnIcons } from "./SettingLayoutCSS";

const SettingLayout = () => {
  const [location, setLocation] = useState<Boolean>(false);
  const handleLocationSettingBtn = () => {
    location ? setLocation(false) : setLocation(true);
  };
  return (
    <SettingWrap>
      <LocationBtnIcons>
        <MdOutlineLocationSearching onClick={handleLocationSettingBtn} className={location ? "active" : ""} />
      </LocationBtnIcons>
      <MenuBtnIcons>
        <TfiMenuAlt />
      </MenuBtnIcons>
    </SettingWrap>
  );
};

export default SettingLayout;
