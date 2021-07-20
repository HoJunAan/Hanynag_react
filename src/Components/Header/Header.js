import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainLogo from "img/logo.PNG";
// import HeaderLink from "Components/Header/HeaderLink";
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
  justify-content: space-between;
`;

const Item = styled.li`
  text-decoration: none;
  position: relative;
`;

const MSLink = styled(Link)`
  &:hover {
    color: #388285;
  }
`;

const HeaderComponent = () => (
  <NavBar>
    <NavBarHeader>
      <LogoAndTitle>
        <MainLogo src={mainLogo} alt="main_logo" />
        <Title className="title">한양미래연구소</Title>
      </LogoAndTitle>
      <LoginAndJoin>
        <Login>로그인</Login>
        <Join>회원가입</Join>
      </LoginAndJoin>
    </NavBarHeader>
    <NavBarBottom>
      <NavBarNav className="font">
        <Item>
          <MSLink to="/">
            <div>교육 소개</div>
          </MSLink>
          {/* <HeaderLink />   이거 메뉴!!!!!!!!!!*/}
        </Item>
        <Item>
          <MSLink to="/">
            <div>교육 후기</div>
          </MSLink>
        </Item>
        <Item>
          <MSLink to="/">
            <div>기업 소개</div>
          </MSLink>
        </Item>
        <Item>
          <MSLink to="/">
            <div>교육 신청/문의</div>
          </MSLink>
        </Item>
      </NavBarNav>
    </NavBarBottom>
  </NavBar>
);

export default HeaderComponent;
