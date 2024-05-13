import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 1312px;
  border: 1.5px dashed #e0a39a;
  // border-width: 1.5px;
  // border-image: repeating-linear-gradient(to right, #E0A39A, #E0A39A 15px, transparent 15px, transparent 30px);
  border-radius: 30px;
  padding: 40px 123px;
  gap: 100px;
  margin-top: 25px;
  @media (max-width: 1430px) {
    background-color: #FFFFFF;
  }
  @media (max-width: 1340px) {
    gap: 10px;
    width: 100vw;;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ContainerStat = styled.div`
  display: flex;
  gap: 16px;
`;
export const Number = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-heigt: 114%;
`;
export const Description = styled.p`
  font-size: 14px;
  line-heigt: 129%;
  width: 74px;
`;
