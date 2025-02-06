import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  width: 350px;
  border: 1.5px dashed #e0a39a;
  border-radius: 30px;
  padding: 10px 10px;
  gap: 10px;
  margin-top: 25px;
  @media (min-width: 769px) {
  width: 724px;
  gap: 80px;
  }
  @media (min-width: 1440px) {
  width: 1312px;
   gap: 100px;
     padding: 40px 123px;
  }
  
`;
export const ContainerStat = styled.div`
  gap: 2px;
  @media (min-width: 769px) {
  }
  @media (min-width: 1440px) {
  display: flex;
  gap: 16px;
  }
`;
export const Number = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-heigt: 100%;
  @media (min-width: 769px) {
  text-align: center;
  }
  @media (min-width: 1440px) {
  font-size: 28px;
  font-weight: 500;
  line-heigt: 114%;
  }
`;
export const Description = styled.p`
  font-size: 10px;
  line-heigt: 129%;
  @media (min-width: 769px) {
  }
  @media (min-width: 1440px) {
  font-size: 14px;
  line-heigt: 100%;
  width: 74px;
  }
`;
