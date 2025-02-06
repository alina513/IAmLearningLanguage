import styled from 'styled-components';
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 88px;
  width: 350px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  padding-right: 40px;
  padding-left: 40px;
  @media (min-width: 769px) {
    width: 769px;
  }
  @media (min-width: 1440px) {
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
export const Button = styled.button`
  display: flex;
  padding: 0px;
  border: none;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const LogOut = styled.button`
  width: 166px;
  height: 48px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #ffffff;
  background-color: #121417;
  display: none;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background-color: #f4c8ba;
    color: black;
    border: none;
  }
  @media (min-width: 769px) {
    display: flex;
  }
`;
