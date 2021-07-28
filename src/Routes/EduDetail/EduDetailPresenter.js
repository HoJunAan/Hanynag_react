import React, { useState } from "react";
import styled from "styled-components";
import SubTop3 from "Components/EduDetailComponent/SubTop3";
import DetailIntro from "Components/EduDetailComponent/DetailIntro";
import Goal from "Components/EduDetailComponent/Goal";
import Curriculum from "Components/EduDetailComponent/Curriculum";
import PictureSection from "Components/EduDetailComponent/PictureSection";

const Page = styled.div`
  margin: 10vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EduDetailPresenter = () => {
  const [Detail] = useState({
    subject: [
      "대상",
      "인원",
      "교육비",
      "시간",
      "장소",
      "개인 준비물",
      "결과물",
      "문의",
    ],
    target: [
      "4차 산업혁명을 이끌어나갈 메이커를 꿈꾸는 초등/중등/고등학생",
      "메이커 융합 굥육을 선도하는 학교/청소년 기관",
      "학교,청소년 기관을 대상으로 메이커 융합 굥육을 진행하는 지자체/교육청",
    ],
    personnel: ["1회 최소 20명 이상 (20명 이하일 경우, 1인당 비용 상승)"],
    expense: ["실시간 : 1인 22,000원", "동영상 : 1인 20,000원"],
    time: ["실시간 : 60/90분"],
    place: ["1인1대PC(인터넷&WI-FI환경)"],
    material: ["개인 필기구"],
    result: ["3D 모델링 파일"],
    question: ["한양 미래 연구소/ 070-8064-0829"],
  });

  const [CurriculumData] = useState({
    subject: ["도입", "전개", "마무리"],
    introduction: [
      "3D 프린터 이해하기",
      "3D 프린터의 역사, 종류, 구성 부품, 작동원리 알아보기",
      "3D 프린팅 제품 직접 만져보고 특징 알아보기",
    ],
    deployment: [
      "3D프린터 소프트웨어 'Tinker CAD' 이해하기",
      "3D프린터 사용을 위한 소프트웨어 이해하기",
      "'Tinker CAD'의 간단한 사용법 알아보기",
    ],
    finish: [
      "다양한 분양에서 활용되고 있는 3D프린팅 산업의 가능성 및 미래 산업에 필요로 하는 인재의 모습 이야기하기",
    ],
  });

  return (
    <>
      <SubTop3 title="3D프린팅 전문가" />
      <Page>
        <DetailIntro Detail={Detail} />
        <Goal />
        <Curriculum CurriculumData={CurriculumData} />
        {/* <PictureSection /> */}
        {/* <ExpectEffect /> */}
        {/* <Review /> */}
        {/* <Map /> */}
        {/* <RefundPolicy /> */}
      </Page>
    </>
  );
};

export default EduDetailPresenter;
