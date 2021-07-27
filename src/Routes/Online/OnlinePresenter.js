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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(2, 500px);
  grid-gap: 30px;
`;

const Button = styled.button`
  all: unset;
  width: 70px;
  height: 100%;
  text-align: center;
  margin-left: 10px;
  background-color: #388281;
  color: white;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
`;

const TypeButton = styled.button`
  all: unset;
  background-color: white;
  width: 23%;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-weight: 500;
  &:focus {
    color: white;
    background-color: #388281;
  }
`;

const OnlinePresenter = ({
  subTopData,
  handleSubmit,
  searchTerm,
  updateTerm,
  eduData,
  submitTerm,
  AllCheck,
  MakerCheck,
  CodingCheck,
  SpecialCheck,
  type,
}) => (
  <>
    <SubTopVariety subTopData={subTopData} />
    <SearchSection>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="검색"
          value={searchTerm || ""}
          onChange={updateTerm}
        ></Input>
        <Button onClick={handleSubmit}>검색</Button>
      </Form>
      <ButtonSection>
        <TypeButton onClick={AllCheck}>ALL</TypeButton>
        <TypeButton onClick={MakerCheck}>메이커 융합 교육</TypeButton>
        <TypeButton onClick={CodingCheck}>코딩 교육</TypeButton>
        <TypeButton onClick={SpecialCheck}>특강</TypeButton>
      </ButtonSection>
      <EduGridSection>
        {submitTerm === ""
          ? eduData
              .filter((item) => item.type.includes(type))
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
              ))
          : eduData
              .filter(
                (item) =>
                  item.title.includes(searchTerm) && item.type.includes(type)
              )
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
