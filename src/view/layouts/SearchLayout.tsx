import { SearchWrap, SearchInput } from "./SearchLayoutCSS";

const SearchLayout = () => {
  return (
    <SearchWrap>
      <SearchInput type="text" placeholder="원하는 지역/@카페명을 검색하세요" />
    </SearchWrap>
  );
};

export default SearchLayout;
