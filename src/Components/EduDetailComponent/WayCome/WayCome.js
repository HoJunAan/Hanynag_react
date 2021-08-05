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
  padding: 20px;
`;
const Tab = styled.div``;
const Title = styled.div``;
const Bar = styled.div``;
const Place = styled.div``;

const { kakao } = window;
const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "400px",
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
          <Bar />
          <Place>
            <span>경기도 안산시 상록구 한양대학로 55 5공학관</span>
            <span>지하 1층 창업 1실</span>
          </Place>
        </Tab>
        <Tab>
          <Title>연구소</Title>
          <Bar />
          <Place>
            <span>경기도 안산시 초지동 신명트윈타워 A동5층</span>
            <span>(원포공원1로 59)</span>
          </Place>
        </Tab>
      </Info>
    </Main>
  </Section>
);

export default WayCome;
