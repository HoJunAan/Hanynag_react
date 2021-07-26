import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 80%;
  left: 0;
  transform: translateX(-35%);
  width: 250px;
  font-weight: 450;
  font-size: 14px;
  z-index: 10;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 15px 0;
  visibility: hidden;

  &:hover {
    visibility: visible;
  }
`;

const Item = styled.li`
  padding: 0 15px;
  height: 40px;
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

const MsLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > i {
    opacity: 0;
  }
`;

const HeaderLinkComponent = (props) => {
  const { HeaderLinkTab, HeaderLinkUrl } = props;
  return (
    <>
      {HeaderLinkTab ? (
        <Nav>
          {HeaderLinkTab.map((item, index) => (
            <Item key={index}>
              {HeaderLinkUrl ? (
                <MsLink to={HeaderLinkUrl[index]}>
                  <div>{item}</div>
                  <i className="fas fa-arrow-circle-right arrow"></i>
                </MsLink>
              ) : null}
            </Item>
          ))}
        </Nav>
      ) : null}
    </>
  );
};

export default HeaderLinkComponent;
