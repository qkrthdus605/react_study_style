import styled from "@emotion/styled";
import Logo from "../assets/Logo.svg";

const LogoSelf = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 101px;
  height: 32px;
  margin-left: 80px;
  display: flex;
`;

const LogoImage = styled.div`
  background: url(${Logo}) center no-repeat;
  width: 50px;
  height: 32px;
`;

const LogoText = styled.p`
  left: 60px;
  margin: 5px 0 0 6px;
  width: 68px;
  height: 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #FF295b;
  cursor: pointer;
`;

function Header() {
  return (
    <LogoSelf>
      <LogoContainer>
        <LogoImage />
        <LogoText>airbnb</LogoText>
      </LogoContainer>
    </LogoSelf>
  );
}

export default Header;