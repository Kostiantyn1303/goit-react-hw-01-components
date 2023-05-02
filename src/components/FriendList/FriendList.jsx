import PropTypes from 'prop-types';
import { FriendsListItem } from '../FriendListItem/FriendListItem';
import { List } from './FrendList.styled';
export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
}
FriendList.prototype = { friends: PropTypes.array };
