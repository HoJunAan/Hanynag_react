import React from "react";
import SubTop from "Components/SubTop";
import Poster from "Components/Poster";
import styled from "styled-components";

const IntroduceComponent = styled.div`
  height: 100%;
`;

const Introduce = (props) => {
  const { data } = props;
  return (
    <IntroduceComponent>
      <SubTop />
      <Poster data={data} />
    </IntroduceComponent>
  );
};

export default Introduce;
