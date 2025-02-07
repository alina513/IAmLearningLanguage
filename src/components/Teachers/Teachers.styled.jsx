import styled from 'styled-components';

export const LoadMore = styled.button`
  display: flex;
  width: 183px;
  height: 60px;
  background-color: #f4c550;
  color: #121417;
  font-size: 18px;
  font-weight: 700;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 65px;
  margin-right: auto;
  margin-left: auto;
  &:hover,
  &:focus {
    background-color: #f4c8ba;
  }
`;
export const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 350px;
  padding: 0px 18px 96px 18px;
  @media (min-width: 769px) {
  width: 769px;
  }
     @media (min-width: 1440px) {
  width: 1184px;
    padding: 0px 128px 96px 128px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Text = styled.h2`
  margin: 100px auto 50px auto;
  color: red;
`;
