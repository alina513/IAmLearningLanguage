import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const ContainerNav = styled.div`
  display: none;
  align-items: center;
  gap: 8px;
  margin-left: 10px;
  @media (min-width: 769px) {
   display: flex;
  }
  @media (min-width: 1440px) {
  gap: 28px;
  }
`;