import styled from "styled-components";

export const Overlay = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 1000;
background-color:  #f2c0bd;
@media (min-width: 769px) {
display: none;
}
`

export const Button = styled.button`
display: flex;
padding: 0px;
border: none;
position: absolute;
top: 30px;
right: 30px;
`

export const Container = styled.div`
padding-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;
`