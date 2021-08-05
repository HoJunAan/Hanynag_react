import styled from "styled-components";
import SubTitle from "Components/EduDetailComponent/SubTitle";

const Section = styled.section`
  background-color: #f8f8f8;
  padding: 50px 5vw;
  width: 100%;
`;

const Grid = styled.div`
  margin: 30px 8vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PictureSection = () => {
  return (
    <Section>
      <SubTitle title="교육 사진" />
      <Grid>
        <Column>
          <Img src={require("img/modeling.PNG").default} />
          <div>(결과물) 모델링 파일</div>
        </Column>
        <Column>
          <Img src={require("img/modeling.PNG").default} />
          <div>(결과물) 모델링 파일</div>
        </Column>
        <Column>
          <Img src={require("img/modeling.PNG").default} />
          <div>(결과물) 모델링 파일</div>
        </Column>
      </Grid>
    </Section>
  );
};

export default PictureSection;
