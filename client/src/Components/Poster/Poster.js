import React from "react";
import styled from "styled-components";
import Item from "./Item";

const SubContent = styled.div`
  margin: 100px 12vw;
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 1fr);
`;

const Poster = (props) => {
  const { data } = props;
  return (
    <SubContent>
      {data.map((poster, index) => (
        <Item
          src={poster.src}
          easyInfo={poster.easyInfo}
          title={poster.title}
          type={poster.type}
          target={poster.target}
          term={poster.term}
          videoOffer={poster.videoOffer}
          price={poster.price}
          key={index}
        />
      ))}
    </SubContent>
  );
};

export default Poster;
