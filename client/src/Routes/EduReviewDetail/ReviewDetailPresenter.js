import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 70vw;
    margin: 0 auto;
`;
const Container = styled.div``;
const Row = styled.div``;
const Title = styled.div``;
const Writer = styled.div``;
const File = styled.div``;
const MainReview = styled.div`
    word-break: break-all;
`;

const EduReivewPresenter = ({ reviewData }) => {
    console.log(reviewData);
    return (
        <Box>
            {reviewData ? (
                <Container>
                    <Row>
                        <Title>{reviewData.title}</Title>
                    </Row>
                    <Row>
                        <Writer>작성자 경기도 모 고등학생</Writer>
                    </Row>
                    <Row>
                        <File>첨부파일</File>
                    </Row>
                    <Row>
                        <MainReview
                            dangerouslySetInnerHTML={{ __html: reviewData.main }}
                        ></MainReview>
                    </Row>
                </Container>
            ) : null}
        </Box>
    );
};

export default EduReivewPresenter;
