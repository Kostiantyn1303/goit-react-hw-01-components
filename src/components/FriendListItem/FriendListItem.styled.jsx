import styled from '@emotion/styled';
export const Items = styled.li`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 280px;
`;
export const FriendName = styled.p`
  font-size: 12px;
`;
export const Status = styled.span`
  justify-self: start;
  width: 16px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ available }) => {
    return available ? 'rgb(47, 201, 47)' : 'rgb(240, 53, 53)';
  }};
`;
