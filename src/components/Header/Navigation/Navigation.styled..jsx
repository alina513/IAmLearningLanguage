import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const LinkLogo = styled(Link)`
  color: #121417;
  font-size: 12px;
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
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;
 
