import styled from "styled-components";
import { Link } from "react-router-dom";
const Board = styled.div`
    width: 70vw;
    margin: 30px auto;
    font-size: 14px;
`;
const BoardTop = styled.div`
    border-top: 2px solid;
    margin-top: 30px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f8f8f8;
    border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
`;

const Content = styled(Link)`
    height: 45px;
    border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.7);
    :hover {
        background: rgba(0, 0, 0, 0.1);
    }
`;
const Index = styled.div`
    width: 15%;
    text-align: center;
`;

const Title = styled.h4`
    text-align: start;
    width: 65%;
`;

const TopTitle = styled(Title)`
    text-align: center;
`;

const Writer = styled.div`
    text-align: center;
    width: 20%;
`;

const Button = styled(Link)`
    background: var(--main-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21%;
`;

const ButtonArea = styled.div`
    display: flex;
    height: 35px;
    margin: 20px 0 20px 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 60%;
    margin-left: auto;
    overflow: hidden;
`;
const ButtonSubmit = styled.button`
    height: 100%;
    border: 0;
    width: 15%;
`;

const Form = styled.form`
    width: 80%;
`;

const Select = styled.select`
    border: 0;
    height: 100%;
    width: 15%;
    background: none;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const Option = styled.option`
    border: 0;
    height: 100%;
`;

const Input = styled.input`
    border: 0;
    width: 70%;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    :focus {
        border: none;
    }
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;

const CategoryArea = styled.nav`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`;
const Category = styled.button`
    height: 50px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    font-size: 15px;
    color: ${(props) => props.focuscheck && "white"};
    background: ${(props) =>
        props.focuscheck ? "var(--main-color)" : "rgba(0,0,0,0.1)"};
`;

const SubTitle = ({ boardData, buttonSelect, typeHandler }) => {
    return (
        <Board>
            <CategoryArea>
                <Category
                    focuscheck={buttonSelect[0]}
                    onClick={() => typeHandler(0)}
                >
                    전체
                </Category>
                <Category
                    focuscheck={buttonSelect[1]}
                    onClick={() => typeHandler(1)}
                >
                    청소년 캠프
                </Category>
                <Category
                    focuscheck={buttonSelect[2]}
                    onClick={() => typeHandler(2)}
                >
                    찾아가는 체험교실
                </Category>
                <Category
                    focuscheck={buttonSelect[3]}
                    onClick={() => typeHandler(3)}
                >
                    청소년 동아리
                </Category>
                <Category
                    focuscheck={buttonSelect[4]}
                    onClick={() => typeHandler(4)}
                >
                    전문인 특강 / 창의체험부스
                </Category>
            </CategoryArea>
            <BoardTop>
                <Index>번호</Index>
                <TopTitle>제목</TopTitle>
                <Writer>작성자</Writer>
            </BoardTop>
            {boardData
                ? boardData.map((item, index) => (
                      <Content key={index} to={`review/${item._id}`}>
                          <Index>{index + 1}</Index>
                          <Title>{item.title}</Title>
                          <Writer>경기도 모 고등학생</Writer>
                      </Content>
                  ))
                : null}
            <ButtonArea>
                <Form>
                    <Select>
                        <Option>제목</Option>
                        <Option>내용</Option>
                        <Option>작성자 아이디</Option>
                        <Option>작성자 이름</Option>
                    </Select>
                    <Input></Input>
                    <ButtonSubmit>검색</ButtonSubmit>
                </Form>
                <Button to="review/form">게시글 작성</Button>
            </ButtonArea>
        </Board>
    );
};

export default SubTitle;
