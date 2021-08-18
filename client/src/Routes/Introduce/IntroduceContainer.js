import React, { useState, useEffect } from "react";
import IntroducePresenter from "./IntroducePresenter";
import axios from "axios";

const Introduce = () => {
  const [data] = useState([
    {
      src: "img/6.jpg",
      easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
      title: "온라인 교육",
      type: "(실시간/영상강의)",
      target: "초등/중등/고등",
      term: "기간/실시간:60분/90분",
      videoOffer: "총40분(이론20분+실습20분)",
      price: "교육비용:1인10,000원~35,000원",
    },
    {
      src: "img/6.jpg",
      easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
      title: "온라인 교육",
      type: "(실시간/영상강의)",
      target: "초등/중등/고등",
      term: "기간/실시간:60분/90분",
      videoOffer: "총40분(이론20분+실습20분)",
      price: "교육비용:1인10,000원~35,000원",
    },
    {
      src: "img/6.jpg",
      easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
      title: "온라인 교육",
      type: "(실시간/영상강의)",
      target: "초등/중등/고등",
      term: "기간/실시간:60분/90분",
      videoOffer: "총40분(이론20분+실습20분)",
      price: "교육비용:1인10,000원~35,000원",
    },
    {
      src: "img/6.jpg",
      easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
      title: "온라인 교육",
      type: "(실시간/영상강의)",
      target: "초등/중등/고등",
      term: "기간/실시간:60분/90분",
      videoOffer: "총40분(이론20분+실습20분)",
      price: "교육비용:1인10,000원~35,000원",
    },
    {
      src: "img/6.jpg",
      easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
      title: "온라인 교육",
      type: "(실시간/영상강의)",
      target: "초등/중등/고등",
      term: "기간/실시간:60분/90분",
      videoOffer: "총40분(이론20분+실습20분)",
      price: "교육비용:1인10,000원~35,000원",
    },
    {
      src: "img/6.jpg",
      easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
      title: "온라인 교육",
      type: "(실시간/영상강의)",
      target: "초등/중등/고등",
      term: "기간/실시간:60분/90분",
      videoOffer: "총40분(이론20분+실습20분)",
      price: "교육비용:1인10,000원~35,000원",
    },
  ]);
  const [result, resultUpdate] = useState();
  useEffect(() => {
    const getData = async () => {
      const fromSerevr = await axios.get("/");
      console.dir(fromSerevr);
    };
    getData();
  }, []);
  return <IntroducePresenter data={data} />;
};

export default Introduce;
