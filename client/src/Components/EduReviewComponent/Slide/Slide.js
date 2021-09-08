import styled from "styled-components";
import { useState, useEffect } from "react";
import human from "img/human.png";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  position: relative;
  overflow: hidden;
`;

const SlideList = styled.div`
  width: 210vw;
  display: table;
  transition: all 0.3s;
  transform: translateX(${(props) => props.imageCurrentNo}px);
`;
const SlideContent = styled.div`
  width: 70vw;
  padding: 30px 50px;
  display: table-cell;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
`;
const Star = styled.div`
  color: #54efac;
  font-size: 11px;
  margin-top: 5px;
`;
const Info = styled.div``;
const Content = styled.div`
  padding: 0 20px;
  line-height: 20px;
  margin-top: 20px;
`;
const Name = styled.div`
  font-weight: 600;
`;
const LArrow = styled.div`
  position: absolute;
  top: 45%;
  left: 1.5%;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.15);
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    transform: translateX(-30%);
  }
  &:hover {
    background: var(--main-color);
  }
  z-index: 1;
`;
const RArrow = styled.div`
  position: absolute;
  top: 45%;
  right: 1.5%;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.15);
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    transform: translateX(-30%);
  }
  &:hover {
    background: var(--main-color);
  }
  z-index: 1;
`;
const SubTitle = ({ SlideData }) => {
  const [imageCurrentNo, updateNo] = useState(0);
  const [size, setSize] = useState(0);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const slidingRight = () => {
    if (imageCurrentNo >= -size) updateNo(imageCurrentNo - size * 0.7);
  };
  const slidingLeft = () => {
    if (imageCurrentNo < 0) updateNo(imageCurrentNo + size * 0.7);
  };

  return (
    <Container>
      <LArrow onClick={slidingLeft}>
        <i class="fas fa-chevron-left" />
      </LArrow>
      <RArrow onClick={slidingRight}>
        <i class="fas fa-chevron-right" />
      </RArrow>
      <SlideList imageCurrentNo={imageCurrentNo}>
        {SlideData.map((item) => (
          <SlideContent>
            <Profile>
              <Img src={human} />
              <Info>
                <Name>{item.place}</Name>
                <Star>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </Star>
              </Info>
            </Profile>
            <Content>
              {item.content.split(/[.?!]/).map((line) => (
                <div>{line}</div>
              ))}
            </Content>
          </SlideContent>
        ))}
      </SlideList>
    </Container>
  );
};

export default SubTitle;
