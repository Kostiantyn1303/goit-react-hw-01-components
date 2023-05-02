import styled from '@emotion/styled';
import { getRandomHexColor } from '../HexColor';
export const Section = styled.section`
  margin: 0 auto;
  text-align: center;
`;
export const Title = styled.h2`
  padding-top: 20px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 5px;
  justify-content: center;

  border-radius: 5px;
`;
export const StatItems = styled.li`
  padding: 25px;
  border: 1px solid #d8e4e2;
  font-size: 12px;
  background-color: ${getRandomHexColor};
`;
export const Text = styled.span`
  font-size: 12px;
`;
