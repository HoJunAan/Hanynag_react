import styled from "styled-components";
import BarComponent from "Components/Bar";

const SubTopVariety = styled.div`
  background-color: #fffabb;
  height: 55vh;
  padding: 120px 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

const Concept = styled.div``;

const SubTopComponent = ({ subTopData }) => (
  <SubTopVariety>
    <SmallTitle>{subTopData.subTitle}</SmallTitle>
    <Title>
      {subTopData.mainTitle}
      <Concept>{subTopData.eduConcept}</Concept>
    </Title>
    <Bar />
  </SubTopVariety>
);

export default SubTopComponent;
