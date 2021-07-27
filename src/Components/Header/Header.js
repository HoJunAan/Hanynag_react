import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainLogo from "img/logo.PNG";
import HeaderLink from "Components/Header/HeaderLink";
import "CSS/fonts.css";

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  z-index: 10;
`;

const NavBarHeader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 90px;
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;
const LogoAndTitle = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  align-items: center;
`;
const MainLogo = styled.img`
  width: 55px;
  height: 60px;
`;

const Title = styled.div`
  color: #388285;
  font-size: 35px;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 700;
  margin-left: 13px;
`;

const LoginAndJoin = styled.div`
  display: flex;
  margin-right: 20vw;
  font-size: 14px;
`;
const Login = styled(Link)`
  padding-right: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
`;

const Join = styled(Link)`
  padding-left: 20px;
`;

const NavBarBottom = styled.div`
  width: 100vw;
  height: 40%;
  padding: 0 30vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 18px;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const NavBarNav = styled.ul`
  width: 35vw;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  position: relative;
  width: 100%;
`;

const MSLink = styled(Link)`
  &:hover {
    color: #388285;
    ${(props) => (props.mouse = true)}
  }
  .prevent {
    background-color: blue;
  }
`;

const HeaderComponent = () => {
  const [data] = useState([
    {
      HeaderTab: "교육 소개",
      HeaderLinkTab: [
        "교육 소개",
        "온라인 교육 (실시간/영상강의)",
        "청소년 캠프",
        "찾아가는 체험교실 (1회기)",
        "청소년 동아리 (장회기)",
        "전문인 특강",
        "창의 체험 부스",
      ],
      HeaderLinkUrl: [
        "/",
        "/online",
        "/online",
        "/online",
        "/online",
        "/online",
        "/online",
      ],
    },
    {
      HeaderTab: "교육 후기",
      HeaderLinkTab: ["교육 후기", "캠프 만족도", "언론 보도"],
      HeaderLinkUrl: ["/online", "/online", "/online"],
    },
    {
      HeaderTab: "기업 소개",
      HeaderLinkTab: ["기업 소개"],
      HeaderLinkUrl: ["/online"],
    },
    {
      HeaderTab: "교육 신청/문의",
    },
  ]);

  const [hoverVar1, updateVar1] = useState(false);
  const [hoverVar2, updateVar2] = useState(false);
  const [hoverVar3, updateVar3] = useState(false);
  const [hoverVar4, updateVar4] = useState(false);

  const mouseEnter1 = () => updateVar1(true);
  const mouseEnter2 = () => updateVar2(true);
  const mouseEnter3 = () => updateVar3(true);
  const mouseEnter4 = () => updateVar4(true);
  const mouseLeave1 = () => updateVar1(false);
  const mouseLeave2 = () => updateVar2(false);
  const mouseLeave3 = () => updateVar3(false);
  const mouseLeave4 = () => updateVar4(false);
  return (
    <NavBar>
      <NavBarHeader>
        <LogoAndTitle>
          <MainLogo src={mainLogo} alt="main_logo" />
          <Title className="title">한양미래연구소</Title>
        </LogoAndTitle>
        <LoginAndJoin>
          <Login to="/">로그인</Login>
          <Join to="/">회원가입</Join>
        </LoginAndJoin>
      </NavBarHeader>
      <NavBarBottom>
        <NavBarNav className="font">
          <Item key="0" onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}>
            <MSLink to="/">
              <div>{data[0].HeaderTab}</div>
            </MSLink>
            <HeaderLink
              HeaderLinkTab={data[0].HeaderLinkTab}
              HeaderLinkUrl={data[0].HeaderLinkUrl}
              hoverVar={hoverVar1}
            />
          </Item>
        </NavBarNav>
        <NavBarNav className="font">
          <Item key="0" onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}>
            <MSLink to="/">
              <div>{data[1].HeaderTab}</div>
            </MSLink>
            <HeaderLink
              HeaderLinkTab={data[1].HeaderLinkTab}
              HeaderLinkUrl={data[1].HeaderLinkUrl}
              hoverVar={hoverVar2}
            />
          </Item>
        </NavBarNav>
        <NavBarNav className="font">
          <Item key="0" onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3}>
            <MSLink to="/">
              <div>{data[2].HeaderTab}</div>
            </MSLink>
            <HeaderLink
              HeaderLinkTab={data[2].HeaderLinkTab}
              HeaderLinkUrl={data[2].HeaderLinkUrl}
              hoverVar={hoverVar3}
            />
          </Item>
        </NavBarNav>
        <NavBarNav className="font">
          <Item key="0" onMouseEnter={mouseEnter4} onMouseLeave={mouseLeave4}>
            <MSLink to="/">
              <div>{data[3].HeaderTab}</div>
            </MSLink>
            <HeaderLink
              HeaderLinkTab={data[3].HeaderLinkTab}
              HeaderLinkUrl={data[3].HeaderLinkUrl}
              hoverVar={hoverVar4}
            />
          </Item>
        </NavBarNav>
      </NavBarBottom>
    </NavBar>
  );
};

export default HeaderComponent;
