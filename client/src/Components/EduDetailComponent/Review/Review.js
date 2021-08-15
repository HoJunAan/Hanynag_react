import { forwardRef } from "react";
import styled from "styled-components";
import SubTitleLeftBar from "../SubTitleLeftBar";

const Section = styled.div`
  display: flex;
  width: 100%;
  padding: 0 13vw;
  flex-direction: column;
  align-items: flex-start;
`;

const Box = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  padding: 50px 80px;
  display: flex;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;
const LeftSide = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  padding-right: 3vw;
  display: flex;
`;
const Picture = styled.div`
  font-size: 50px;
  opacity: 0.3;
  margin-right: 20px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const RightSide = styled.div`
  padding-left: 3vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Star = styled.div`
  color: #54efac;
`;

const Review = forwardRef(({ _ }, ref) => {
  return (
    <Section ref={ref}>
      <SubTitleLeftBar title="교육 후기" />

      <Box>
        <LeftSide>
          <Picture>
            <i className="far fa-user" />
          </Picture>
          <Info>
            <span>서울**고 1학년</span>
            <span>김⚪⚪</span>
            <Star>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </Star>
          </Info>
        </LeftSide>
        <RightSide>
          <span>
            이번 캠프를 통해 직접 3D 프린팅을 해본 것이 가장 재밌었습니다.
          </span>
          <span>
            미래에는 사람들이 원하는 제품들을 프린터기로 뽑을 수 있다는게
            신기했습니다.
          </span>
          <span>
            3D 프린팅으로 만든 제품들도 직접 만져볼 수 있어서 좋았어요.
          </span>
          <span>캠프가 너무 빨리 지나간 것 같아요ㅠㅠ</span>
        </RightSide>
      </Box>
      <Box>
        <LeftSide>
          <Picture>
            <i className="far fa-user" />
          </Picture>
          <Info>
            <span>서울**고 1학년</span>
            <span>김⚪⚪</span>
            <Star>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </Star>
          </Info>
        </LeftSide>
        <RightSide>
          <span>
            이번 캠프를 통해 직접 3D 프린팅을 해본 것이 가장 재밌었습니다.
          </span>
          <span>
            미래에는 사람들이 원하는 제품들을 프린터기로 뽑을 수 있다는게
            신기했습니다.
          </span>
          <span>
            3D 프린팅으로 만든 제품들도 직접 만져볼 수 있어서 좋았어요.
          </span>
          <span>캠프가 너무 빨리 지나간 것 같아요ㅠㅠ</span>
        </RightSide>
      </Box>
    </Section>
  );
});
export default Review;
