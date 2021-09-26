import styled from "styled-components";

const SubTitleSection = styled.div`
  display: flex;
  margin: 50px 0;
`;

const Title = styled.div`
  font-size: 28px;
  margin-left: 20px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Bar = styled.div`
  width: 6px;
  height: 28px;
  background-color: black;
  opacity: 0.1;
`;

const SubTitle = ({ title }) => (
  <SubTitleSection>
    <Bar />
    <Title>{title}</Title>
  </SubTitleSection>
);

export default SubTitle;
