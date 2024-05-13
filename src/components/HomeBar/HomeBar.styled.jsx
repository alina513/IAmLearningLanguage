import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 720px;
  max-height: 530px;
  background-color: #eeeeee;
  border-radius: 30px;
  padding: 98px 64px;
  box-sizing: border-box;
  @media (max-width: 1430px) {
    margin-top: 10px;
  }
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-heigt: 117%;
  max-width: 568px;
  margin-bottom: 32px;
  @media (max-width: 572px) {
    font-size: 36px;
    width: 320px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  line-heigt: 138%;
  max-width: 471px;
  margin-bottom: 64px;
  @media (max-width: 572px) {
    width: 320px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const Link = styled(NavLink)`
  display: flex;
  max-width: 267px;
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
  @media (max-width: 572px) {
    margin-right: auto;
    margin-left: auto;
  }
`;
export const Span = styled.span`
  background-color: #e0a39a;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -2%;
  border-radius: 8px;
`;
