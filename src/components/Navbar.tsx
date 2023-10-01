import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #fff;
  box-shadow: 1px 1px 5px #c3c3c3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 15px;
`;
const Button = styled.button`
  border: none;
  margin-right: 15px;
  border-radius: 50%;
  padding: 13px 13px 7px 13px;
  background-color: blue;
  transition: 0.3s;
  color: #fff;
  border: 1px solid blue;
  position: relative;
  &:hover {
    background-color: #fff;
    color: blue;
    border: 1px solid blue;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 400;
  color: #373737;
  &.active {
    color: blue;
  }
`;

const Navbar = () => {
  return (
    <React.Fragment>
      <Container>
        <Nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/store"}>Store</Link>
        </Nav>
        <Button style={{ width: "3rem", height: "3rem", position: "relative" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
          </svg>
          <div>3</div>
        </Button>
      </Container>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
