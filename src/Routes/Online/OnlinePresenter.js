import React from "react";
import SubTopVariety from "Components/SubTopVariety";
import EduList from "Components/SearchEdu/EduList";
import styled from "styled-components";

const SearchSection = styled.section`
  height: 100vh;
  padding: 40px 200px;
`;

const Form = styled.form`
  width: 300px;
  height: 30px;
  margin-bottom: 40px;
  display: flex;
  margin-left: auto;
`;

const Input = styled.input`
  all: unset;
  padding-left: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  opacity: 0.6;
  font-size: 15px;

  &:focus {
    box-shadow: #66afe9 0px 7px 29px 0px;
  }
`;

const EduGridSection = styled.div`
  background-color: antiquewhite;
  width: 100%;
`;

const OnlinePresenter = ({
  subTopData,
  handleSubmit,
  searchTerm,
  updateTerm,
  eduData,
}) => (
  <>
    <SubTopVariety subTopData={subTopData} />
    <SearchSection>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="검색어를 입력하세요."
          value={searchTerm || ""}
          onChange={updateTerm}
        ></Input>
      </Form>
      <EduGridSection>
        {eduData.map((item) => (
          <EduList item={item}></EduList>
        ))}
      </EduGridSection>
    </SearchSection>
  </>
);

export default OnlinePresenter;
