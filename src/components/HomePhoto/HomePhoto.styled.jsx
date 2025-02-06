import styled from 'styled-components';
import girl1x from '../../assets/img/girl-1x.png';
import girl2x from '../../assets/img/girl-2x.png';
import Mac1x from '../../assets/img/Mac-1x.png';
import Mac2x from '../../assets/img/Mac-2x.png';
export const Container = styled.div`
  background-image: url(${Mac1x}), url(${girl1x});
  background-repeat: no-repeat;
  width: 350px;
  height: 530px;
  background-color: #f2c0bd;
  border-radius: 30px;
  background-position: 50% 64%, 50% 27%;
  background-size: 80% auto, 60% auto;
  

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Mac2x}), url(${girl2x});
  }
    @media (min-width: 769px) {
    
  }
  @media (min-width: 1440px) {
  background-position: bottom center, 50% 27%;
    width: 568px;
    height: 530px;
  }
`;
