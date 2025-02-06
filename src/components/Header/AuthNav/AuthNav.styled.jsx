import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export const Registation = styled.button`
  width: 80px;
  height: 48px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 10px;
  line-height: 125%;
  color: #ffffff;
  background-color: #121417;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background-color: #f4c8ba;
    color: black;
    border: none;
  }
  @media (min-width: 769px) {
    font-size: 16px;
    width: 166px;
  }

`;
export const Login = styled.button`
  font-weight: 700;
  font-size: 10px;
  min-width: 65px;
  line-height: 100%;
  color: #121417;
  background-color: #f8f8f8;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  &:hover,
  &:focus {
    color: #f4c8ba;
  }
  @media (min-width: 769px) {
    font-size: 16px;
     min-width: 95px;
    gap: 8px;
     line-height: 125%;
  }
`;
