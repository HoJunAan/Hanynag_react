import styled from "styled-components";

const SubTop = styled.div`
  background-color: #ecfec9;
  height: 320px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SmallTitle = styled.span`
  opacity: 0.4;
  font-size: 18px;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const Bar = styled.div`
  opacity: 0.3;
  background-color: black;
  width: 35px;
  height: 3px;
`;

const Paragraph = styled.div`
  p {
    padding: 3px 0;
  }
`;

const SubTopComponent = () => (
  <>
    <SubTop>
      <SmallTitle>Education Introduction</SmallTitle>
      <Title>교육소개</Title>
      <Bar></Bar>
      <Paragraph>
        <p>4차산업혁명시대를 이끌어 나갈 인재를 양성하는</p>
        <p>한양미래연구소의 교육 프로그램입니다.</p>
      </Paragraph>
    </SubTop>
  </>
);

export default SubTopComponent;
