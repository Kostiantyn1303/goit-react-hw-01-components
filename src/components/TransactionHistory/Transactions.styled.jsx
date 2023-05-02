import styled from '@emotion/styled';
export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
`;
export const Thead = styled.thead`
  width: 35%;
  background-color: gray;
  color: white;
  text-shadow: 1px 1px 1px black;
`;
export const Th = styled.th`
  padding: 20px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
  border: 3px solid purple;
`;
export const Td = styled.td`
  padding: 20px;
  text-align: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
  border: 3px solid purple;
`;
