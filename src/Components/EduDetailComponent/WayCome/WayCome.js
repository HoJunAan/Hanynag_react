import React, { useEffect } from "react";
import styled from "styled-components";
import SubTitleLeft from "Components/EduDetailComponent/SubTitleLeftBar";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15vh 13vw;
`;
const Main = styled.div`
  margin-top: 20px;
  display: flex;
`;
const Info = styled.div`
  padding: 10px 0;
  padding-left: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
`;
const Tab = styled.div``;
const Title = styled.span`
  padding-bottom: 5px;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.3);
`;

const Place = styled.div`
  margin-top: 20px;
`;
const { kakao } = window;
const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.29696381856806, 126.83423554770089),
      level: 4,
    };
    new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "550px",
        height: "250px",
      }}
    ></div>
  );
};

const WayCome = () => (
  <Section>
    <SubTitleLeft title="오시는 길" />
    <Main>
      <MapContainer />
      <Info>
        <Tab>
          <Title>본사</Title>
          <Place>
            <div>경기도 안산시 상록구 한양대학로 55 5공학관</div>
            <div>지하 1층 창업 1실</div>
          </Place>
        </Tab>
        <Tab>
          <Title>연구소</Title>
          <Place>
            <div>경기도 안산시 초지동 신명트윈타워 A동5층</div>
            <div>(원포공원1로 59)</div>
          </Place>
        </Tab>
      </Info>
    </Main>
  </Section>
);

export default WayCome;
