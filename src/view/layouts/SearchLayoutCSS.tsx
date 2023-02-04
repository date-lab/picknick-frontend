import styled from "styled-components";

export const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 20px;
`;

export const SearchIcon = styled.span`
  position: relative;
  left: 30px;
  top: 9px;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 35px;
  border-radius: 10px;
  border: none;
  padding-left: 37px;
  box-sizing: border-box;
  font-size: 13px;
  &::placeholder {
    color: #818181;
  }
  &:focus {
    outline: none;
  }
`;
