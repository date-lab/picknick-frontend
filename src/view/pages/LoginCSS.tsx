import styled from "styled-components";

export const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export const LoginHeader = styled.div`
  width: 100%;
  height: 97vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginHeaderTitle = styled.div`
  position: relative;
  right: 80px;
  top: 172px;
`;

export const LoginHeaderFirstTitle = styled.span`
  font-weight: bold;
  font-size: 70px;
`;

export const LoginHeaderLastTitle = styled.span`
  font-size: 60px;
`;

export const LoginHeaderDescTitle = styled.div`
  font-size: 18px;
  opacity: 0.6;
  position: relative;
  left: 4px;
`;

export const LoginHeaderLogoImg = styled.div`
  position: absolute;
`;

export const LogoImg1 = styled.img`
  position: relative;
  left: 90px;
  bottom: 166px;
`;
export const LogoImg2 = styled.img`
  position: relative;
  left: 40px;
  bottom: 100px;
`;

export const Test = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const KakaoLoginBtn = styled.div`
  padding: 18px 150px;
  background-color: #f8d534;
  border-radius: 30px;
  font-weight: bold;
  font-size: 20px;
  color: #3b1e1e;
  cursor: pointer;
`;
