import React, { useState } from "react";
import styled from "styled-components";
import SubTop from "Components/SubTop";
import SubTitle from "Components/EduReviewComponent/SubTitle";
import Slide from "Components/EduReviewComponent/Slide";
import Form from "Components/EduReviewFormComponent/Form";

const Box = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

const EduReivewPresenter = ({ subTopData, SlideData }) => {
  return (
    <>
      <SubTop subTopData={subTopData} />
      <Box>
        <SubTitle title="베스트 교육 후기" />
        <Slide SlideData={SlideData} />
        <Form />
      </Box>
    </>
  );
};

export default EduReivewPresenter;
