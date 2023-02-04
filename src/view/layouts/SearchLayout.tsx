import { BiSearch } from "react-icons/bi";

import { SearchWrap, SearchIcon, SearchInput } from "./SearchLayoutCSS";

const SearchLayout = () => {
  return (
    <SearchWrap>
      <SearchIcon>
        <BiSearch />
      </SearchIcon>
      <SearchInput type="text" placeholder="원하는 지역/@카페명을 검색하세요" />
    </SearchWrap>
  );
};

export default SearchLayout;
