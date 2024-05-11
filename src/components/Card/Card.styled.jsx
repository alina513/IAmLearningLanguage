import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Wrapper = styled.div`
max-width: 1184px;
  border-radius: 24px;
  background-color: #FFFFFF;
  padding: 24px;
`
export const ContainerPhoto = styled.div`
display: flex;
gap: 48px;
`
export const Photo = styled.img`
width: 120px;
  height: 120px;
  border-radius: 100px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 3px solid #FBE9BA;
`
export const ContainerText = styled.div`
max-width: 968px;
`
export const ContainerLang = styled.div`
display: flex;
  gap: 192px;
`

export const TitleLang = styled.h3`
color: #8A8A89;
font-size: 16px;
font-weight: 500;
line-height: 150%;
`

export const ListLanguage = styled.ul`
display: flex;
`
export const ItemLanguage = styled.li`
height: 16px;
padding: 0 16px 0 16px;
border-right: solid 1px rgba(18, 20, 23, 0.2);
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 150%;
&:last-child {
  border-right: none;
}
`
export const Name = styled.h2`
color: #121417;
font-size: 24px;
font-weight: 500;
line-height: 100%;
margin-top: 8px;
margin-bottom: 32px;
`

export const TitleText = styled.h4`
color: #8A8A89;
font-size: 16px;
font-weight: 500;
line-height: 150%;
`
export const TextSpeaks = styled.h4`
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 100%;
text-decoration: underline;
`

export const Text = styled.p`
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 100%;
`
export const ContainerItemText = styled.div`
display: flex;
align-items: center;
margin-bottom: 8px;
`
export const ReadMore = styled(NavLink)`
display: flex;
margin-top: 16px;
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 100%;
text-decoration: underline;
margin-bottom: 32px;
`
export const ListLevel = styled.ul`
display: flex;
gap: 8px;
`
export const ItemLevel = styled.li`
// width: 133px;
  height: 32px;
  border-radius: 35px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  color: #121417;
font-size: 14px;
font-weight: 500;
line-height: 114%;
&:first-child {
  background-color: #F4C550;
}
`
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
&:hover,
  &:focus {
    background-color: #F4C8BA;
  }
`
export const HeartButton = styled.button`
border: none;
background-color: #FFFFFF;
`
export const GreenContainer = styled.div`
position: relative;
`
export const Green = styled.svg`
position: absolute;
  top: 25px;
  right: 30px;

`