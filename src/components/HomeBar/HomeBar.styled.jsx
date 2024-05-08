import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
width: 720px;
height: 530px;
background-color: #EEEEEE;
border-radius: 30px;
padding: 98px 64px;
box-sizing: border-box;
`
export const Title = styled.h1`
font-size: 48px;
font-weight: 500;
line-heigt: 117%;
width: 568px;
margin-bottom: 32px;
`
export const Text = styled.p`
font-size: 16px;
line-heigt: 138%;
width: 471px;
margin-bottom: 64px;
`
export const Link = styled(NavLink)`
display: flex;
width: 267px;
height: 60px;
background-color: #E0A39A;
color: #121417;
font-size: 18px;
font-weight: 700;
border-radius: 12px;
align-items: center;
justify-content: center;
&:hover,
  &:focus {
    background-color: #F4C8BA;
  }
`
export const Span = styled.span`
background-color: #E0A39A;
font-style: italic;
font-weight: 400;
letter-spacing: -2%;
border-radius: 8px;
`