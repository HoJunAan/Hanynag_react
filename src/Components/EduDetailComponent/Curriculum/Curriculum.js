import styled from "styled-components";
import SubTitle from "Components/EduDetailComponent/SubTitle";

const Section = styled.div`
  margin-top: 120px;
  letter-spacing: -2px;
  margin-bottom: 120px;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 100px 500px;
  font-weight: 500;
  margin: 30px 20vw;
`;

const Key = styled.div`
  background-color: #40857d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Value = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Li = styled.div`
  margin: 5px 5px;
`;

const LiTitle = styled.div`
  margin: 5px 5px;
  i {
    opacity: 0.3;
    font-size: 15px;
  }
  font-weight: 550;
`;

const Curriculum = ({ CurriculumData }) => {
  const { subject, introduction, deployment, finish } = CurriculumData;
  return (
    <Section>
      <SubTitle title={"커리큘럼"} />
      <GridSection>
        <Key>
          <div>{subject[0]}</div>
        </Key>
        <Value>
          {introduction.map((item, index) =>
            index === 0 ? (
              <LiTitle>
                <i class="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                {item}
              </LiTitle>
            ) : (
              <Li>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{item}</Li>
            )
          )}
        </Value>
        <Key>
          <div>{subject[1]}</div>
        </Key>
        <Value>
          {deployment.map((item, index) =>
            index === 0 ? (
              <LiTitle>
                <i class="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                {item}
              </LiTitle>
            ) : (
              <Li>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{item}</Li>
            )
          )}
        </Value>
        <Key>
          <div>{subject[2]}</div>
        </Key>
        <Value>
          {finish.map((item, index) =>
            index === 0 ? (
              <LiTitle>
                <i class="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                {item}
              </LiTitle>
            ) : (
              <Li>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{item}</Li>
            )
          )}
        </Value>
      </GridSection>
    </Section>
  );
};

export default Curriculum;
