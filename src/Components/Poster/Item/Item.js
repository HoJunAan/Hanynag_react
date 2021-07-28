import React from "react";
import styled from "styled-components";
import lecture from "img/lecture_picture.PNG";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: translateY(-15px);
  }
`;

const PosterImg = styled.img`
  width: 100%;
  height: 40%;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 60%;
  padding: 20px 10px 60px 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -1.5px;
`;

const EasyExplain = styled.span`
  color: #327955;
`;

const Title = styled.h2`
  font-size: 23px;
  font-weight: 550;
`;

const TypeOfEdu = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const Bar = styled.div`
  width: 20px;
  height: 3px;
  background-color: black;
  opacity: 0.2;
`;

const Paragraph = styled.p``;

const List = styled.ul`
  list-style-type: disc;
  list-style: inside;
  & > li:last-child {
    color: red;
  }
  li {
    line-height: 20px;
  }
`;

const Item = ({ easyInfo, title, type, target, term, videoOffer, price }) => (
  <Container to="/online">
    <PosterImg src={lecture} alt="lecture_picture" />
    <BottomSection>
      <EasyExplain>{easyInfo}</EasyExplain>
      <Title>
        {title}
        <TypeOfEdu>{type}</TypeOfEdu>
      </Title>
      <Bar />
      <Paragraph>
        <List>
          <li>{target}</li>
          <li>{term}</li>
          <li>{videoOffer}</li>
          <li>{price}</li>
        </List>
      </Paragraph>
    </BottomSection>
  </Container>
);

export default Item;
