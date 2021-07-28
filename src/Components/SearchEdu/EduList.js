import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Poster = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  padding: 30px 15px;
  letter-spacing: -1px;
  transition: border 0.4s linear;
  transition: box-shadow 0.4s linear;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2px solid #3b8188;
  }
`;

const PosterImg = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 70px;
`;

const InfoSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 50px;
`;
const Type = styled.div`
  background-color: #e8f9e4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 30px;
  border-radius: 7px;
  font-weight: 550;
  font-size: 12px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 550;
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style: none;
  font-size: 13px;
  padding: 5px 0;
  &:before {
    content: "·";
    font-size: 20px;
    padding-right: 3px;
  }
  &:last-child {
    color: red;
  }
`;

const Bar = styled.div`
  width: 20px;
  height: 2px;
  background-color: black;
  opacity: 0.2;
`;
const EduList = ({ imgUrl, type, title, target, result, cost }) => {
  return (
    <Poster to="/online/maker1">
      <PosterImg src={require("img/edu_img.PNG").default} alt="lecture" />
      <InfoSection>
        <Type>
          <span>{type}</span>
        </Type>
        <Title>{title}</Title>
        <Bar />
        <Ul>
          <Li>{target}</Li>
          <Li>{result}</Li>
          <Li>{cost}</Li>
        </Ul>
      </InfoSection>
    </Poster>
  );
};

export default EduList;
