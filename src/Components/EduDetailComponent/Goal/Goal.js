import styled from "styled-components";
import SubTitle from "Components/EduDetailComponent/SubTitle";

const Box = styled.div`
  height: 130px;
  width: 260px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
  font-size: 14px;
  padding: 35px 40px;
  position: relative;
  font-weight: 500;
`;

const Circle = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  top: -25px;
  right: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const Goal = ({}) => (
  <>
    <SubTitle title={"교육 목표"} />
    <Box>
      <div>4차 산업혁명의 핵심기술인</div>
      <div>3D프린팅에 대해 알아보고,</div>
      <div> 3D모델링 툴을 익혀본다.</div>
      <Circle>
        <i class="fas fa-check"></i>
      </Circle>
    </Box>
  </>
);

export default Goal;
