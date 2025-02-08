import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorContainer = styled.div`
  background-color: #f2c0bd;
  height: 100vh;
  margin: 0 auto;
  max-width: 375px;
  @media screen and (min-width: 769px) {
    max-width: 769px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const WrapperError = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  transform: translateY(20vh);

  @media screen and (min-width: 769px) {
    padding: 0px 32px;
    transform: translateY(20vh);
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 96px;
  }
`;

export const ErrorTitle = styled.h1`
  font-weight: 500;
  font-size: 66px;
  line-height: 100%;
  letter-spacing: 1%;
  margin-bottom: 14px;

  @media screen and (min-width: 769px) {
    font-size: 160px;
    line-height: 94%;
    letter-spacing: 1%;
    margin-bottom: 28px;
  }
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0px;
  margin-bottom: 28px;

  @media screen and (min-width: 769px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const ErrorButton = styled(Link)`
  width: 147px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  display: block;
  background-color: #f4c550;
  color: #f8f8f8;

  text-align: center;
  padding: 12px 40px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #f4c8ba;
  }

  @media screen and (min-width: 769px) {
    width: 204px;
    height: 56px;
    font-size: 20px;
    line-height: 120%;
  }
`;
