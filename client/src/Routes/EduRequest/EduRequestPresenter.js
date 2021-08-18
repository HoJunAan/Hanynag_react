import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 50px);
`;

const EduRequestPresenter = () => (
  <>
    <Form method="POST">
      <div>담당자 이름</div>
      <input required name="" type="text" />
      <div>담당자 이메일</div>
      <input required name="" type="email" />
      <div>기관/단체명</div>
      <input required name="" type="text" />
      <div>담당자 연락처</div>
      <input required name="" type="" />
      <div>교육 희망일</div>
      <input required name="" type="date" />
      <div>교육 진행 시간</div>
      <input required name="" type="" />
      <div>교육 희망 장소</div>
      <input required name="" type="" />
      <div>교육 인원</div>
      <input required name="" type="" />
      <div>교육 유형 선택</div>
      <select>
        <option>청소년 캠프</option>
        <option>찾아가는 체험교실</option>
        <option>청소년 동아리</option>
        <option>전문인 특강</option>
        <option>체험 부스</option>
      </select>
      <div>신청 교육명</div>
      <input required name="" type="" />
      <input required value="제출완료" type="submit" />
    </Form>
  </>
);

export default EduRequestPresenter;
