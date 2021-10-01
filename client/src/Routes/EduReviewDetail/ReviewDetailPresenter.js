import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = styled.div`
    width: 70vw;
    margin: 0 auto;
`;
const Container = styled.div``;
const Row = styled.div``;
const Title = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 23px;
    font-weight: 500;
    align-items: center;
`;
const Writer = styled.div`
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding-left: 20px;
    p {
        margin-left: 20px;
        opacity: 0.4;
        font-weight: 400;
    }
`;
const File = styled.div`
    font-size: 12px;
    font-weight: 700;
    margin-left: 20px;
`;
const MainReview = styled.div`
    word-break: break-all;
    margin-left: 20px;
    padding: 20px 0 20px 0;
`;
const TopBorder = styled.div`
    background-color: black;
    height: 2px;
    margin: 15px 0 15px 0;
`;
const MiddleBorder = styled.div`
    background-color: black;
    opacity: 0.1;
    height: 0.5px;
    margin: 15px 0 15px 0;
`;

const Icon = styled(FontAwesomeIcon)``;

const ButtonArea = styled.div`
    display: flex;
    width: 175px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    overflow: hidden;
`;

const Button = styled.button`
    height: 25px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 13px;
    :hover {
        opacity: 0.6;
    }
    :nth-child(1) {
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    }
    :nth-child(2) {
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    }
    :nth-child(3) {
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    }
    :nth-child(4) {
        background: #286090;
        color: white;
    }
    :nth-child(5) {
        background: #c9302c;
        color: white;
    }
`;

const Comment = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-top: 70px;
`;

const CommentArea = styled.div`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 30px;
`;

const CommentText = styled.textarea`
    width: 100%;
    height: 130px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    color: #555555;
    font-family: "Noto Sans KR", sans-serif;
    padding: 5px;
    :focus {
        box-shadow: #74b9ff 2px 2px 2px 2px;
        border: #74b9ff;
        outline: none;
    }
`;

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    gap: 10px;
    margin-top: 10px;
`;

const Input = styled.input`
    font-family: "Noto Sans KR", sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    height: 30px;
    margin-bottom: 50px;
    :focus {
        box-shadow: #74b9ff 2px 2px 2px 2px;
        border: #74b9ff;
        outline: none;
    }
    :not(:last-child) {
        padding-left: 10px;
    }
    :last-child {
        text-align: center;
    }
`;
const EduReivewPresenter = ({ reviewData }) => {
    console.log(reviewData);
    return (
        <Box>
            {reviewData ? (
                <Container>
                    <TopBorder />
                    <Row>
                        <Title>{reviewData.title}</Title>
                    </Row>
                    <MiddleBorder />
                    <Row>
                        <Writer>
                            작성자
                            <p>경기도 모 고등학생</p>
                        </Writer>
                    </Row>
                    <MiddleBorder />

                    <Row>
                        <File>
                            첨부파일
                            <Icon icon="file-alt" />
                        </File>
                    </Row>
                    <Row>
                        <MainReview
                            dangerouslySetInnerHTML={{ __html: reviewData.main }}
                        />
                        <MiddleBorder />
                    </Row>
                    <Row>
                        <ButtonArea>
                            <Button>
                                <Icon icon="chevron-left" />
                            </Button>
                            <Button>
                                <Icon icon="bars" />
                            </Button>
                            <Button>
                                <Icon icon="chevron-right" />
                            </Button>
                            <Button>
                                <Icon icon="cog" />
                            </Button>
                            <Button>
                                <Icon icon="trash-alt" />
                            </Button>
                        </ButtonArea>
                    </Row>
                    <Row>
                        <Comment>댓글</Comment>
                    </Row>
                    <MiddleBorder />
                    <Row>
                        <CommentArea>댓글 작성</CommentArea>
                    </Row>
                    <Row>
                        <CommentText placeholder="댓글을 입력하세요" />
                        <Form>
                            <Input placeholder="이름"></Input>
                            <Input placeholder="비밀번호"></Input>
                            <Input placeholder="확인"></Input>
                        </Form>
                    </Row>
                </Container>
            ) : null}
        </Box>
    );
};

export default EduReivewPresenter;
