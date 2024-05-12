import styled from "styled-components";

export const Title = styled.h2`
margin-bottom: 20px;

font-family: Roboto, sans-serif;
font-size: 24px;
font-weight: 600;
line-height: 1,33;
`;

export const Input = styled.input`
margin-bottom: 16px;
padding-left: 16px;

width: 100%;
height: 54px;

border: 1px solid rgba(18, 20, 23, 0.1);
border-radius: 12px;
outline: none;

&::placeholder{
    font-size: 16px;
    line-height: 1,38;
    color: #121417;
}
`
export const Button = styled.button`
display: block;
margin:0 auto;
width: 100%;
height: 60px;

background-color:#F4C550 ;
border-radius: 12px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  margin-bottom: 20px;

  font-size: 16px;
  font-family:  Roboto, sans-serif;
  line-height: 1,38;
  color: #121417;
`;

export const InputRadio = styled.input`
  display: none;
`;

export const RadioButtonIndicator = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(18, 20, 23, 0.2); /* Исходный стиль */
  border-radius: 50%;
  transition: border-color 0.3s ease-in-out;
  margin-right: 5px;

  ${InputRadio}:checked + & {
    border-color: #f4c550; /* Новый цвет рамки при нажатии на радиокнопку */
  }
`;

export const CheckedIcon = styled.svg`

  visibility: hidden;

  ${InputRadio}:checked + ${RadioButtonIndicator} & {
    visibility: visible;
  }
`;