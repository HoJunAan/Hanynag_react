import React from "react";
import SubTop from "Components/SubTop";
import Poster from "Components/Poster";
import styled from "styled-components";
import axios from "axios";

const IntroduceComponent = styled.div`
  height: 100%;
`;

const Introduce = (props) => {
  const { data } = props;
  const data1 = axios.get("/");
  console.log(data1);
  return (
    <IntroduceComponent>
      <SubTop />
      <Poster data={data} />
    </IntroduceComponent>
  );
};

export default Introduce;
