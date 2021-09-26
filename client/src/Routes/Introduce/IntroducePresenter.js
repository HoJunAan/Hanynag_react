import React from "react";
import SubTop from "Components/SubTop";
import Poster from "Components/Poster";
import styled from "styled-components";

const IntroduceComponent = styled.div`
  height: 100%;
`;

const Introduce = ({ data, subTopData }) => {
  return (
    <IntroduceComponent>
      <SubTop subTopData={subTopData} />
      <Poster data={data} />
    </IntroduceComponent>
  );
};

export default Introduce;
