import React, { Component } from "react";
import styled from "styled-components";
import Item from "./Item";

const SubContent = styled.div`
  margin: 100px 220px;
  height: 130vh;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

class Poster extends Component {
  state = {
    data: [
      {
        src: "img/lecture_picture.png",
        easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
        title: "온라인 교육",
        type: "(실시간/영상강의)",
        target: "초등/중등/고등",
        term: "기간/실시간:60분/90분",
        videoOffer: "총40분(이론20분+실습20분)",
        price: "교육비용:1인10,000원~35,000원",
      },
      {
        src: "img/lecture_picture.png",
        easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
        title: "온라인 교육",
        type: "(실시간/영상강의)",
        target: "초등/중등/고등",
        term: "기간/실시간:60분/90분",
        videoOffer: "총40분(이론20분+실습20분)",
        price: "교육비용:1인10,000원~35,000원",
      },
      {
        src: "img/lecture_picture.png",
        easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
        title: "온라인 교육",
        type: "(실시간/영상강의)",
        target: "초등/중등/고등",
        term: "기간/실시간:60분/90분",
        videoOffer: "총40분(이론20분+실습20분)",
        price: "교육비용:1인10,000원~35,000원",
      },
      {
        src: "img/lecture_picture.png",
        easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
        title: "온라인 교육",
        type: "(실시간/영상강의)",
        target: "초등/중등/고등",
        term: "기간/실시간:60분/90분",
        videoOffer: "총40분(이론20분+실습20분)",
        price: "교육비용:1인10,000원~35,000원",
      },
      {
        src: "img/lecture_picture.png",
        easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
        title: "온라인 교육",
        type: "(실시간/영상강의)",
        target: "초등/중등/고등",
        term: "기간/실시간:60분/90분",
        videoOffer: "총40분(이론20분+실습20분)",
        price: "교육비용:1인10,000원~35,000원",
      },
      {
        src: "img/lecture_picture.png",
        easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
        title: "온라인 교육",
        type: "(실시간/영상강의)",
        target: "초등/중등/고등",
        term: "기간/실시간:60분/90분",
        videoOffer: "총40분(이론20분+실습20분)",
        price: "교육비용:1인10,000원~35,000원",
      },
    ],
  };
  render() {
    const { data } = this.state;
    return (
      <SubContent>
        {data.map((poster) => (
          <Item
            src={poster.src}
            easyInfo={poster.easyInfo}
            title={poster.title}
            type={poster.type}
            target={poster.target}
            term={poster.term}
            videoOffer={poster.videoOffer}
            price={poster.price}
          ></Item>
        ))}
      </SubContent>
    );
  }
}

export default Poster;
