import styled from "styled-components";
import BarComponent from "Components/Bar";

const SubTItleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
`;

const Bar = styled(BarComponent)`
  width: 23px;
  height: 4px;
`;

const SubTitle = ({ title }) => (
  <SubTItleSection>
    <Title>{title}</Title>
    <Bar />
  </SubTItleSection>
);

export default SubTitle;
