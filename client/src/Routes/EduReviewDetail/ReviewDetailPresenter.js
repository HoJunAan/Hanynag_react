import React from "react";
import styled from "styled-components";
import ReviewContainer from "Components/EduReviewDetailComponent/ReviewContainer";
const Box = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

const EduReivewPresenter = ({ reviewData }) => {
  return <Box>{<ReviewContainer reviewData={reviewData} />}</Box>;
};

export default EduReivewPresenter;
