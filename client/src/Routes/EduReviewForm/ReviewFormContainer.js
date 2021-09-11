import React, { useState } from "react";
import EduReivewPresenter from "./ReviewFormPresenter";

const EduReviewContainer = () => {
  const [boardData] = useState([
    "다음엔 더 다양하게 들어보고 싶어요!",
    "진로 선택에 실습이 도움돼요.",
    "4차산업 혁명과 가까워진 기분.",
    "체험이 좋았고 신기했다.",
    "다른 것도 만들고 싶다.",
    "창작품을 만들어서 좋았다.",
    "감사했습니다!",
    "후배들에게 추천하고 싶다.",
  ]);

  return <EduReivewPresenter boardData={boardData} />;
};

export default EduReviewContainer;
