import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
}`;

export const Nav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 25px;
  color: #ffffff57;
  margin-right: 30px;
  text-decoration: none;
  &.active {
    color: #ececf1;
    font-weight: 700;
    transform: scale(1.1);
  }
`;
