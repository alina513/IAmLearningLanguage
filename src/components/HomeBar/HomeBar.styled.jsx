import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 350px;
  margin-right: auto;
  margin-left: auto;
  max-height: 530px;
  background-color: #eeeeee;
  border-radius: 30px;
  padding: 98px 64px;
  box-sizing: border-box;
  @media (min-width: 1440px) {
   width: 720px;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-heigt: 100%;
  margin-bottom: 12px;
  @media (min-width: 1440px) {
    font-size: 48px;
  font-weight: 500;
  line-heigt: 117%;
  max-width: 568px;
  margin-bottom: 32px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  line-heigt: 138%;
  margin-bottom: 64px;
  margin-right: auto;
  margin-left: auto;

`;
export const Link = styled(NavLink)`
  display: flex;
  width: 222px;
  height: 60px;
  background-color: #e0a39a;
  color: #121417;
  font-size: 18px;
  font-weight: 700;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background-color: #f4c8ba;
  }
    max-width: 267px;
  
`;
export const Span = styled.span`
  background-color: #e0a39a;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -2%;
  border-radius: 8px;
`;

export const Button = styled.button`
  display: flex;
  width: 222px;
  height: 60px;
  background-color: #e0a39a;
  color: #121417;
  font-size: 18px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background-color: #f4c8ba;
    @media (min-width: 1440px) {
    width: 267px;
    }
  }`