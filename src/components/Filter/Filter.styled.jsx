import styled from 'styled-components';

export const Form = styled.form`
  @media (min-width: 769px) {
    display: flex;
    gap: 20px;
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
  font-size: 14px;
  font-weight: 600;
  line-height: 111%;
  margin-bottom: 10px;
  & option {
    color: #8a8a89;
    font-size: 18px;
    font-weight: 600;
    line-height: 111%;
  }
  @media (min-width: 769px) {
    font-size: 18px;
    margin-bottom: 0px;
  }
`;

export const Lab = styled.label`
  font-size: 10px;
  font-weight: 500;
  line-height: 129%;
  color: #8a8a89;
  padding-left: 5px;
  @media (min-width: 769px) {
    font-size: 14px;
  }
`;
