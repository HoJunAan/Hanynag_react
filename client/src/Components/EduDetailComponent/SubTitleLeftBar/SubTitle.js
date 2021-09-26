import styled from "styled-components";

const SubTItleSection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
`;

const Bar = styled.div`
  width: 6px;
  height: 35px;
  background-color: black;
  opacity: 0.1;
  margin-right: 20px;
`;

const SubTitle = ({ title }) => (
  <SubTItleSection>
    <Bar />
    <Title>{title}</Title>
  </SubTItleSection>
);

export default SubTitle;
