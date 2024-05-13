import styled from 'styled-components';
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 88px;
  align-items: center;
  padding-right: 128px;
  padding-left: 128px;
  @media (max-width: 1200px) {
    padding-right: 40px;
  padding-left: 40px;
  }
`;
