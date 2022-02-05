import styled from "@emotion/styled";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";

const HomeContainer = styled.div`
  width: 1080px;
  height: 605px;
  display: flex;
`;

const HomeText = styled.div`
  font-style: normal;
  font-size: 32px;
  font-weight: 800;
  line-height: 40px;
  margin: 100px 0 0 200px;
  display: flex;
`;

const Button1 = styled.button`
  width: 85px;
  height: 36px;
  text-align: center;
  display: flex;
  padding: 8px 0 0 12px;
  background: white;
  border: 1px solid #b0b0b0;
  border-radius: 30px;
  margin-top: 180px;
  margin-right: 10px;
  margin-left: -205px;
`;

const Button2 = styled.button`
  width: 57px;
  height: 36px;
  text-align: center;
  display: flex;
  padding: 8px 0 0 14px;
  background: white;
  border: 1px solid #b0b0b0;
  border-radius: 30px;
  margin-top: 180px;
`;

const ImgContainer = styled.div`
  width: 1080px;
  height: 363px;
  display: flex;
  align-items: center;
  margin-top: -300px;
  margin-left: 200px;
`;

const HomeImg1 = styled.div`
  background: url(${home1}) center no-repeat;
  width: 531px;
  height: 363px;
  margin-right: 60px;
`;

const HomeImg2 = styled.div`
  background: url(${home2}) center no-repeat;
  width: 531px;
  height: 363px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HostButton = styled.button`
  width: 80px;
  height: 24px;
  border: 2px solid #222222;
  border-radius: 4px;
  font-size: 12px;
  background: #ffffff;
  margin-left: 200px;
  margin-top: 40px;
`;

const HomeTitle = styled.div`
  font-size: 16px;
  margin: 5px 200px;
`;

const HomePrice = styled.span`
  font-weight: 800;
  font-size: 16px;
  margin-left: 200px;
`;

const Per = styled.span`
  font-size: 16px;
`;

function Home() {
  return (
    <>
      <HomeContainer>
        <HomeText>호랑님의 숙소</HomeText>
        <Button1>숙소 유형</Button1>
        <Button2>요금</Button2>
      </HomeContainer>
      <ImgContainer>
        <HomeImg1 />
        <HomeImg2 />
      </ImgContainer>
      <TextContainer>
        <HostButton>슈퍼호스트</HostButton>
        <HomeTitle>호랑이가 사는 집</HomeTitle>
        <div>
          <HomePrice>121,277</HomePrice>
          <Per>/1박</Per>
        </div>
      </TextContainer>
      <TextContainer>
        <HostButton>슈퍼호스트</HostButton>
        <HomeTitle>호랑이가 자주 가는 카페</HomeTitle>
        <div>
          <HomePrice>121,277</HomePrice>
          <Per>/1박</Per>
        </div>
      </TextContainer>
    </>
  );
}

export default Home;
