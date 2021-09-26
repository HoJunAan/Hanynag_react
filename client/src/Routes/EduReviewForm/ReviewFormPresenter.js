import React, { useState } from "react";
import styled from "styled-components";
import Form from "Components/EduReviewFormComponent/Form";

const Box = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

const EduReivewPresenter = () => {
  return (
    <Box>
      <Form />
    </Box>
  );
};

export default EduReivewPresenter;
