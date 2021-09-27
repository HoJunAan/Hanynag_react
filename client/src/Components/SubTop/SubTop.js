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

const SubTopComponent = ({ subTopData }) => (
  <SubTop>
    <SmallTitle>{subTopData.smallTitle}</SmallTitle>
    <Title>{subTopData.title}</Title>
    <Bar></Bar>
    <Paragraph>
      <div>{subTopData.subTitle1}</div>
      <div>{subTopData.subTitle2}</div>
    </Paragraph>
  </SubTop>
);

export default SubTopComponent;
