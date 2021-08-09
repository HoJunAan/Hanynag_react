import React from "react";
import styled from "styled-components";
import SubTitle from "Components/EduDetailComponent/SubTitle";

const Section = styled.div`
  margin: 17vh 0;
`;

const List = styled.div`
  background-color: #f8f8f8;
  height: 100%;
  padding: 10px 20px;
  margin: 30px 0;
`;

const LiTitle = styled.div`
  font-size: 1rem;
  margin: 20px 0px;
  i {
    color: #40857d;
  }
`;

const ExpectEffect = () => {
  return (
    <Section>
      <SubTitle title="기대효과" />
      <List>
        <LiTitle>
          <i className="fas fa-check-circle" />
          &nbsp;&nbsp;&nbsp; 융합 교육 강화를 통해 4차산업혁명시대가 요구하는
          창의적,융합적 사고력 신장
        </LiTitle>
        <LiTitle>
          <i className="fas fa-check-circle" />
          &nbsp;&nbsp;&nbsp; 소프트웨어(SW)교육을 통한 컴퓨팅 사고력 강화
        </LiTitle>
        <LiTitle>
          <i className="fas fa-check-circle" />
          &nbsp;&nbsp;&nbsp; 4차 산업혁명 관련 진로체험활동을 통한 자율적인 진로
          탐색 활성화
        </LiTitle>
      </List>
    </Section>
  );
};

export default ExpectEffect;
