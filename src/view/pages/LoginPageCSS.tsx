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
  justify-content: space-between;
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
  left: 102px;
  top: 70px;
`;
export const LogoImg2 = styled.img`
  position: relative;
  left: 40px;
  top: 140px;
`;

export const KaKaoLoginWrap = styled.div`
  position: relative;
  bottom: 60px;
  width: 100%;
  text-align: center;
`;

export const KakaoLoginBtn = styled.img`
  cursor: pointer;
  max-width: 300px;
`;
