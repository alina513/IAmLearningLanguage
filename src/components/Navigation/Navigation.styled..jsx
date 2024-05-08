import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
justify-content: space-between;
// gap: 390px;
width: 661px;
`
export const ContainerNav = styled.div`
display: flex;
gap: 28px;
`

export const LinkNav = styled(NavLink)`
color: #121417;
font-size: 16px;
font-weight: 400;
line-heigt: 126%;
`

export const LinkLogo = styled(Link)`
color: #121417;
font-size: 20px;
font-weight: 500;
line-heigt: 120%;
`