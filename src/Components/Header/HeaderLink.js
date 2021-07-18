import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 200%;
  left: 0;
  transform: translateX(-35%);
  width: 250px;
  height: 350px;
  font-weight: 450;
  font-size: 14px;
  z-index: 10;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 0;
`;
const Item = styled.li`
  padding: 0 15px;
  height: 100%;
  text-decoration: none;
  opacity: 0.7;
  &:hover {
    background: linear-gradient(to right, #33d9b2, #218c74);
    color: white;
    i {
      opacity: 1;
    }
  }
`;

const M_SLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > i {
    opacity: 0;
  }
`;

class HeaderLinkComponent extends Component {
  render() {
    return (
      <Nav>
        <Item>
          <M_SLink>
            <div>교육 소개</div>
            <i class="fas fa-arrow-circle-right arrow"></i>
          </M_SLink>
        </Item>
        <Item>
          <M_SLink>
            <div>온라인 교육 (실시간/영상강의)</div>
            <i class="fas fa-arrow-circle-right arrow"></i>
          </M_SLink>
        </Item>
        <Item>
          <M_SLink>
            <div>청소년 캠프</div>
            <i class="fas fa-arrow-circle-right arrow"></i>
          </M_SLink>
        </Item>
        <Item>
          <M_SLink>
            <div>찾아가는 체험교실 (1회기)</div>
            <i class="fas fa-arrow-circle-right arrow"></i>
          </M_SLink>
        </Item>
        <Item>
          <M_SLink>
            <div>청소년 동아리 (장회기)</div>
            <i class="fas fa-arrow-circle-right arrow"></i>
          </M_SLink>
        </Item>
        <Item>
          <M_SLink>
            <div>전문인 특강</div>
            <i class="fas fa-arrow-circle-right arrow"></i>
          </M_SLink>
        </Item>
        <Item>
          <M_SLink>
            <div>창의 체험 부스</div>
            <i class="fas fa-arrow-circle-right arrow"></i>
          </M_SLink>
        </Item>
      </Nav>
    );
  }
}

export default HeaderLinkComponent;
