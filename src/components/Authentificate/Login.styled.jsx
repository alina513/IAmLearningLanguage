import styled from 'styled-components';

export const Input = styled.input`
  height: 54px;
  width: 100%;
  color: #121417;
  margin-bottom: 8px;
  padding-left: 16px;
  display: block;
  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  color: #121417;
  font-size: 18px;
  font-weight: 700;
  background-color: #f4c550;
  margin-top: 20px;
  text-align: center;
  border-radius: 12px;
  border: none;
  &:hover,
  &:focus {
    background-color: #f4c8ba;
  }
`;

export const Error = styled.p`
  color: red;
`;
