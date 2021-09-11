import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const Row = styled.div``;
const Title = styled.div``;
const Writer = styled.div``;
const File = styled.div``;
const Main = styled.div``;

const ReviewContainer = ({ reviewData }) => {
  console.log(reviewData);
  return (
    <>
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
            <Main dangerouslySetInnerHTML={{ __html: reviewData.main }}></Main>
            <Main>{reviewData.main}</Main>
          </Row>
        </Container>
      ) : null}
    </>
  );
};

export default ReviewContainer;
