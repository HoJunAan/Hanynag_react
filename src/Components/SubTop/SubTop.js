import styled from "styled-components";
import BarComponent from "Components/Bar";

const SubTop = styled.div`
  background-color: #ecfec9;
  height: 45vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 14px 0;
  }
`;

const SmallTitle = styled.span`
  opacity: 0.4;
  font-size: 15px;
  font-weight: 900;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
`;

const Bar = styled(BarComponent)`
  width: 35px;
  height: 3px;
`;

const Paragraph = styled.div`
  span {
    padding: 3px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  gap: 5px;
`;

const SubTopComponent = () => (
  <SubTop>
    <SmallTitle>Education Introduction</SmallTitle>
    <Title>교육소개</Title>
    <Bar></Bar>
    <Paragraph>
      <div>4차산업혁명시대를 이끌어 나갈 인재를 양성하는</div>
      <div>한양미래연구소의 교육 프로그램입니다.</div>
    </Paragraph>
  </SubTop>
);

export default SubTopComponent;
