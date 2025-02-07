import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 24px;
  background-color: #ffffff;
  padding: 24px;
  margin-top: 12px;
  position: relative;
  @media (min-width: 769px) {
    margin-top: 32px;
  }
`;
export const ContainerPhoto = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 48px;
  }
`;
export const Photo = styled.img`
  width: 120px;
  height: 120px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 3px solid #fbe9ba;
  @media (min-width: 769px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`;
export const ContainerText = styled.div`
  max-width: 968px;
`;
export const ContainerLang = styled.div`
  @media (min-width: 769px) {
    display: flex;
    gap: 2px;
    align-items: flex-end;
  }
  @media (min-width: 1440px) {
    display: flex;
    align-items: stretch;
    gap: 92px;
  }
`;

export const TitleLang = styled.h3`
  color: #8a8a89;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 769px) {
    text-align: start;
    margin-bottom: 0px;
  }
`;

export const ListLanguage = styled.ul`
  display: flex;
`;
export const ItemLanguage = styled.li`
  display: flex;
  flex-wrap: nowrap;
  width: 150px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 16px;
  padding: 0 6px 0 6px;
  border-right: solid 1px rgba(18, 20, 23, 0.2);
  color: #121417;
  font-size: 10px;
  font-weight: 500;
  line-height: 150%;
  &:last-child {
    border-right: none;
  }
  margin-bottom: 20px;
  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1440px) {
    gap: 7px;
    font-size: 16px;
  }
`;
export const Name = styled.h2`
  color: #121417;
  font-size: 24px;
  font-weight: 500;
  line-height: 100%;
  margin-top: 8px;
  margin-bottom: 32px;
  text-align: center;
  @media (min-width: 769px) {
    text-align: left;
  }
`;

export const TitleText = styled.h4`
  color: #8a8a89;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  white-space: nowrap;
  @media (min-width: 769px) {
    font-size: 16px;
  }
`;
export const TextSpeaks = styled.h4`
  color: #121417;
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  text-decoration: underline;
  @media (min-width: 769px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  color: #121417;
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
  @media (min-width: 769px) {
    font-size: 16px;
    line-height: 100%;
  }
`;
export const ContainerItemText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const ReadMore = styled.button`
  display: flex;
  margin-top: 16px;
  border: none;
  background-color: #ffffff;
  color: #121417;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  text-decoration: underline;
  margin-bottom: 32px;
  &:hover,
  &:focus {
    color: #f4c8ba;
  }
`;
export const ListLevel = styled.ul`
  @media (min-width: 769px) {
    display: flex;
    gap: 8px;
  }
`;
export const ItemLevel = styled.li`
  height: 32px;
  border-radius: 35px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0px 12px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 114%;
  &:first-child {
    background-color: #f4c550;
    border: none;
  }
  @media (min-width: 769px) {
    margin-bottom: 0px;
    padding: 0px 8px;
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0px;
    padding: 0px 12px;
    font-size: 14px;
  }
`;
export const Book = styled.button`
display: flex;
height: 60px;
background-color: #F4C550;
color: #121417;
font-size: 18px;
font-weight: 700;
border-radius: 12px;
align-items: center;
justify-content: center;
margin-top: 32px;
padding: 0 48px;
border: none;
margin-bottom; 24px;
 margin-right: auto;
     margin-left: auto;
&:hover,
  &:focus {
    background-color: #F4C8BA;
  }
    @media (min-width: 769px) {
    margin-right: 0px;
     margin-left: 0px;
  }
`;
export const HeartButton = styled.button`
  border: none;
  background-color: #ffffff;
  position: absolute;
  top: 10px;
  right: 10px;
  @media (min-width: 1440px) {
    position: static;
  }
`;
export const GreenContainer = styled.div`
  position: relative;
`;

export const Green = styled.svg`
  position: absolute;
  top: 20px;
  right: 98px;
  @media (min-width: 769px) {
    top: 25px;
    right: 582px;
  }
  @media (min-width: 1440px) {
    top: 25px;
    right: 20px;
  }
`;

export const PriceSpan = styled.span`
  color: #38cd3e;
`;
