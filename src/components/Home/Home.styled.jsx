import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1430px) {
    display: block;
  }
`;
export const Wrapper = styled.div`
  padding: 0px 64px 32px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1430px) {
    background-color: #f2c0bd;
  }
`;
