import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: red;
  font-width: 700;
  @media (min-width: 769px) {
    font-size: 32px;
  }
`;
