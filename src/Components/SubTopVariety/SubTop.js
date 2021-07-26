import styled from "styled-components";

const SubTopVariety = styled.div`
  background-color: #fffabb;
  height: 55vh;
  padding: 120px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SmallTitle = styled.span`
  opacity: 0.4;
  font-size: 15px;
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

const Concept = styled.div``;

const SubTopComponent = ({ subTopData }) => (
  <SubTopVariety>
    <SmallTitle>{subTopData.subTitle}</SmallTitle>
    <Title>
      {subTopData.mainTitle}
      <Concept>{subTopData.eduConcept}</Concept>
    </Title>
    <Bar></Bar>
  </SubTopVariety>
);

export default SubTopComponent;
