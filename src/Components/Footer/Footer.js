import React from "react";
import styled from "styled-components";

//footer 하단 배치를 위한 relative 설정
const SetRelative = styled.div`
  position: relative;
  padding-top: 270px;
`;

const Footer = styled.footer`
  background-color: #444444;
  height: 270px;
  width: 100vw;
  padding: 5vh 11vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.section`
  color: white;
  font-size: 25px;
  padding-bottom: 25px;
`;

const Paragraph = styled.p`
  font-weight: 400;

  display: flex;
  flex-direction: column;
  color: white;
  opacity: 0.5;
  line-height: 25px;
  letter-spacing: -1px;
  font-weight: 100;
  .fa-youtube {
    color: red;
  }
`;

const FooterComponent = () => (
  <SetRelative>
    <Footer>
      <Section>
        <Title>한양미래연구소</Title>
        <Paragraph>
          <span>
            (주) 일리소프트 | 대표자:안호준 | 사업자등록번호:734-81-01722
          </span>
          <span>
            본사:경기도 안산시 상록구 한양대학로 55 5공학관 지하 1층 창업1실
          </span>
          <span>
            연구소:경기도 안산시 초지동 신명트윈타워 A동5층(원포공윈1로59)
          </span>
          <span>대표전화:070-8064-0829 | FAX:031-624-9480</span>
          <span>E-mail:hyhyedu@hanyang.ac.kr/illisoftedu@gmail.com</span>
        </Paragraph>
      </Section>
      <Section>
        <Title>교육 문의</Title>
        <Paragraph>
          <span>교육 문의</span>
          <span>070-8094-0829</span>
          <span>주중 AM 09:00-PM 06:00</span>
          <span>일요일 및 공휴일 휴무</span>
          <span>점심시간PM12:00-PM1:00</span>
        </Paragraph>
      </Section>
      <Section>
        <Title>한양미래연구소 SNS</Title>
        <Paragraph>
          <a href="https://www.youtube.com/channel/UC-k-dVuRwgf7OuIU5D8-54w">
            <i class="far fa-comment"></i> 블로그 바로가기
          </a>
          <a href="https://blog.naver.com/hyhyedu">
            <i class="fab fa-youtube"></i> 유튜브 바로가기
          </a>
        </Paragraph>
      </Section>
    </Footer>
  </SetRelative>
);

export default FooterComponent;
