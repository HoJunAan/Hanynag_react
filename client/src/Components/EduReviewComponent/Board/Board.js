import styled from "styled-components";
import { Link } from "react-router-dom";
const Board = styled.div`
  width: 70vw;
  margin: 100px auto;
  border-top: 2px solid;
  font-size: 14px;
`;
const BoardTop = styled.div`
  width: 100%;
  padding: 15px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f8f8;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 18px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.7);
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.div`
  width: 60%;
`;

const Button = styled(Link)`
  background: var(--main-color);
  color: white;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubTitle = ({ boardData }) => {
  return (
    <Board>
      <BoardTop>
        <div>번호</div>
        <div>제목</div>
        <div>작성자</div>
      </BoardTop>
      {boardData.map((item, index) => (
        <Content key={index}>
          <div>{index + 1}</div>
          <Title>{item}</Title>
          <div>경기도 모 고등학생</div>
        </Content>
      ))}
      <Button to="review/form">게시글 작성</Button>
    </Board>
  );
};

export default SubTitle;
