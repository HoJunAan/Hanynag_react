import styled from "styled-components";
import SubTitle from "Components/EduDetailComponent/SubTitle";

const Section = styled.section`
  background-color: #f8f8f8;
  padding: 80px;
`;

const Grid = styled.div`
  margin-top: 20px;
  grid-template-columns: repeat(3, 10px);
  grid-column-gap: 40px;
`;

const Img = styled.img``;

const PictureSection = ({}) => {
  return (
    <Section>
      <SubTitle title="교육 사진" />
      <Grid>
        <Img src={require("img/modeling.PNG").default} />
        <Img src={require("img/modeling.PNG").default} />
        <Img src={require("img/modeling.PNG").default} />
      </Grid>
    </Section>
  );
};

export default PictureSection;
