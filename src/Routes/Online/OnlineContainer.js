import React, { useState } from "react";
import OnlinePresenter from "./OnlinePresenter";

const OnlineContainer = () => {
  const [searchTerm, searchTermUpdate] = useState("");
  const [submitTerm, submitTermUpdate] = useState("");
  const [type, typeUpdate] = useState("");
  const [subTopData] = useState({
    subTitle: "Online Education",
    mainTitle: "온라인교육",
    eduConcept: "(실시간/영상강의)",
  });
  const [eduData] = useState([
    {
      imgUrl: "/img/edu_img.PNG",
      type: "메이커 융합 교육",
      title: "3D프린팅 전문가",
      target: "초등/중등/고등",
      result: "3D모델링 파일",
      cost: "실시간:1인 22,000원 동영상:1인 20,000원",
    },
    {
      imgUrl: "img/edu_img.PNG",
      type: "메이커 융합 교육",
      title: "3D펜 디자이너",
      target: "초등/중등/고등",
      result: "3D모델링 파일",
      cost: "실시간:1인 22,000원 동영상:1인 20,000원",
    },
    {
      imgUrl: "img/edu_img.PNG",
      type: "메이커 융합 교육",
      title: `초음파 센서로 "로봇 쓰레기통"만들기`,
      target: "초등/중등/고등",
      result: "3D모델링 파일",
      cost: "실시간:1인 22,000원 동영상:1인 20,000원",
    },
    {
      imgUrl: "img/edu_img.PNG",
      type: "메이커 융합 교육",
      title: `적외선 센서로 "강아지 자동차" 만들기`,
      target: "초등/중등/고등",
      result: "3D모델링 파일",
      cost: "실시간:1인 22,000원 동영상:1인 20,000원",
    },
    {
      imgUrl: "img/edu_img.PNG",
      type: "메이커 융합 교육",
      title: `"블루투스 스피커" 만들기`,
      target: "초등/중등/고등",
      result: "3D모델링 파일",
      cost: "실시간:1인 22,000원 동영상:1인 20,000원",
    },
    {
      imgUrl: "img/edu_img.PNG",
      type: "코딩 교육",
      title: "나만의 AR 어플리케이션 만들기",
      target: "초등/중등/고등",
      result: "3D모델링 파일",
      cost: "실시간:1인 22,000원 동영상:1인 20,000원",
    },
    {
      imgUrl: "img/edu_img.PNG",
      type: "코딩 교육",
      title: "메타버스의 이해와 제페토 체험",
      target: "초등/중등/고등",
      result: "3D모델링 파일",
      cost: "실시간:1인 22,000원 동영상:1인 20,000원",
    },
    {
      imgUrl: "img/edu_img.PNG",
      type: "특강",
      title: "4차 산업혁명과 청소년 기업가정신",
      target: "초등/중등/고등",
      result: "3D모델링 파일",
      cost: "실시간:1인 22,000원 동영상:1인 20,000원",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitTermUpdate(searchTerm);
  };
  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    searchTermUpdate(value);
    submitTermUpdate("");
  };

  const AllCheck = () => {
    typeUpdate("");
  };
  const MakerCheck = () => {
    typeUpdate("메이커 융합 교육");
  };
  const CodingCheck = () => {
    typeUpdate("코딩 교육");
  };
  const SpecialCheck = () => {
    typeUpdate("특강");
  };

  return (
    <OnlinePresenter
      handleSubmit={handleSubmit}
      subTopData={subTopData}
      searchTerm={searchTerm}
      updateTerm={updateTerm}
      eduData={eduData}
      submitTerm={submitTerm}
      AllCheck={AllCheck}
      MakerCheck={MakerCheck}
      CodingCheck={CodingCheck}
      SpecialCheck={SpecialCheck}
      type={type}
    />
  );
};

export default OnlineContainer;
