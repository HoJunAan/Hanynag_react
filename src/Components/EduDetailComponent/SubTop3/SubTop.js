import styled from "styled-components";

const SubTop = styled.div`
  background-color: #ecfeca;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -2px;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const Concept = styled.div``;

const SubTopComponent = ({ title }) => (
  <SubTop>
    <Title>{title}</Title>
  </SubTop>
);

export default SubTopComponent;
