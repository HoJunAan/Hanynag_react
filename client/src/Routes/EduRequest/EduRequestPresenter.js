import React from "react";
import styled from "styled-components";
import { post } from "axios";

const Form = styled.form`
  height: 60vh;
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 50px);
`;

const EduRequestPresenter = () => {
  const handleSubmit = () => {
    post("/edu_request");
  };
  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <div>담당자 이름</div>
        <input name="name" type="text" />
        <div>담당자 이메일</div>
        <input name="email" type="email" />
        <div>기관/단체명</div>
        <input name="institution" type="text" />
        <div>담당자 연락처</div>
        <input name="contact" type="text" placeholder="예시)000-0000-0000" />
        <div>교육 희망일</div>
        <input name="date" type="date" />
        <div>교육 진행 시간</div>
        <input name="time" type="text" />
        <div>교육 희망 장소</div>
        <input name="place" type="text" />
        <div>교육 인원</div>
        <input name="personnel" type="number" />
        <div>교육 유형 선택</div>
        <select name="type">
          <option>청소년 캠프</option>
          <option>찾아가는 체험교실</option>
          <option>청소년 동아리</option>
          <option>전문인 특강</option>
          <option>체험 부스</option>
        </select>
        <div>신청 교육명</div>
        <input name="eduName" type="text" />
        <input value="제출완료" type="submit" />
      </Form>
    </>
  );
};
export default EduRequestPresenter;
