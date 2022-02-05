import { useState } from "react";
import styled from "@emotion/styled";
import lion1 from "../assets/lion1.png";
import lion2 from "../assets/lion2.png";
import map from "../assets/map.png";

const MapContainer = styled.div`
  width: 1055px;
  height: 506px;
  display: flex;
  align-items: center;
  margin: 100px 200px;
`;

const Lion = styled.div`
  img{
    width: 377px;
    height: 358px;
    margin-right: 140px;
    cursor: pointer;
  }
  p{
    font-weight: 800;
    font-style: normal;
    font-size: 32px;
    text-align: center;
    margin-right: 120px;
    color: #CCE2C3;
  }
`;

const MapImg = styled.div`
  width: 517px;
  height: 506px;
  background: url(${map});
  display: flex;
`;

function Map() {
  const [ImgHover, setImgHover] = useState(false);

  return (
    <MapContainer>
      <Lion>
        <div
          onMouseOver={() => setImgHover(true)}
          onMouseOut={() => setImgHover(false)}
        >
          <img src={ImgHover ? lion2 : lion1} alt="호랑이 이미지"/>
          <p>새해 복 많이 받으랑</p>
        </div>
      </Lion>  
      <MapImg />
    </MapContainer>
  );
}

export default Map;