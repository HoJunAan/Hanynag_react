import React from "react";
import styled from "styled-components";

const Poster = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
`;

const PosterImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const EduList = ({ imgUrl, type, title, target, result, cost }) => {
  return (
    <Poster>
      <img src={require(imgUrl).default} alt="lecture" />
    </Poster>
  );
};

export default EduList;
