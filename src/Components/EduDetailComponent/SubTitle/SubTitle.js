import styled from "styled-components";

const SubTItleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
`;

const Bar = styled.div`
  width: 23px;
  height: 4px;
  background-color: black;
  opacity: 0.2;
`;

const SubTitle = ({ title }) => (
  <SubTItleSection>
    <Title>{title}</Title>
    <Bar />
  </SubTItleSection>
);

export default SubTitle;
