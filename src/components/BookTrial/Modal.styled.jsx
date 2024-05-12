import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 40px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  line-height: 1, 2;
  letter-spacing: -0, 8;
  padding-top: 40px;
  margin-bottom: 16px;
`;
export const Desc = styled.p`
  font-size: 16px;
  font-family: Roboto, sans-serif;
  line-height: 1, 38;
  margin-bottom: 16px;
  color: rgba(18, 20, 23, 0.8);
`;
export const Button = styled.div`
  border: none;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Container = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;

export const Name = styled.h3`
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  font-family: Roboto, sans-serif;
  line-height: 1, 5;
`;

export const Photo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const Text = styled.p`
  color: #8a8a89;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  line-height: 1, 33;
`;
