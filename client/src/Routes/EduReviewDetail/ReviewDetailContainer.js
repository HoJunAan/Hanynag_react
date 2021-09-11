import React, { useState, useEffect } from "react";
import EduReivewPresenter from "./ReviewDetailPresenter";
import axios from "axios";
import { withRouter } from "react-router";

const EduReviewContainer = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [reviewData, reviewUpdate] = useState();
  useEffect(async () => {
    const { data } = await axios.get(`/review/${id}`);
    reviewUpdate(data);
  }, []);
  return <EduReivewPresenter reviewData={reviewData} />;
};

export default withRouter(EduReviewContainer);
