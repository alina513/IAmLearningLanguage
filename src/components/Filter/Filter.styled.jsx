import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 20px;
  @media (max-width: 545px) {
    flex-direction: column;
    align-items: center;
  }

`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Select = styled.select`
  color: #121417;
  border: none;
  outline: none;
  border-radius: 14px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 600;
  line-height: 1, 11;
  & option {
    color: #8a8a89;
    font-size: 18px;
    font-weight: 600;
    line-height: 1, 11;
  }
`;

export const Lab = styled.label`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1, 29;
  color: #8a8a89;
`;
