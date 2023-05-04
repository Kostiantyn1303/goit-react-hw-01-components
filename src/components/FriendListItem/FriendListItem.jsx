import { Items, FriendName, Status } from './FriendListItem.styled';
export function FriendsListItem(friends) {
  return (
    <Items key={friends.id}>
      <Status available={friends.isOnline}>{friends.isOnline}</Status>
      <img src={friends.avatar} alt="User avatar" width="48" />
      <FriendName>{friends.name}</FriendName>
    </Items>
  );
}
