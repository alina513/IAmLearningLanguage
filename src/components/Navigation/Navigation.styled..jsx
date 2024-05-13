import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  // gap: 390px;
  width: 661px;
  @media (max-width: 1096px) {
    width: 100vw;
  }
  @media (max-width: 525px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
  }
  
`;
export const ContainerNav = styled.div`
  display: flex;
  gap: 28px;
  @media (max-width: 600px) {
    flex-direction: column; 
    gap: 3px;
    margin-left: 10px;
  }
`;

export const LinkNav = styled(NavLink)`
  color: #121417;
  font-size: 16px;
  font-weight: 400;
  line-heigt: 126%;

  &:hover,
  &:focus {
    color: #f4c8ba;
  }

  &.active {
    font-weight: bold;
    color: red;
  }
`;

export const LinkLogo = styled(Link)`
  color: #121417;
  font-size: 20px;
  font-weight: 500;
  line-heigt: 120%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;

  &:hover,
  &:focus {
    color: #f4c8ba;
  }
  @media (max-width: 1096px) {
    font-size: 16px;
  }
`;
