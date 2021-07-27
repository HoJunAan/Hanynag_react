import React from "react";
import SubTopVariety from "Components/SubTopVariety";
import EduList from "Components/SearchEdu/EduList";
import styled from "styled-components";

const SearchSection = styled.section`
  padding: 40px 13vw;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(2, 500px);
  grid-gap: 30px;
`;

const OnlinePresenter = ({
  subTopData,
  handleSubmit,
  searchTerm,
  updateTerm,
  eduData,
  submitCheck,
  submitUpdate,
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
        {submitCheck === false
          ? eduData.map((item, index) => (
              <EduList
                key={index}
                imgUrl={item.imgUrl}
                type={item.type}
                title={item.title}
                target={item.target}
                result={item.result}
                cost={item.cost}
              />
            ))
          : eduData
              .filter((item) => item.title.includes(searchTerm))
              .map((item, index) => (
                <EduList
                  key={index}
                  imgUrl={item.imgUrl}
                  type={item.type}
                  title={item.title}
                  target={item.target}
                  result={item.result}
                  cost={item.cost}
                />
              ))}
      </EduGridSection>
    </SearchSection>
  </>
);

export default OnlinePresenter;
