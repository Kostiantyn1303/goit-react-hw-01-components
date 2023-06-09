import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileInformationContainer,
  Image,
  Info,
  List,
} from './Profile.styled';
export default function Profile(props) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <ProfileContainer>
      <ProfileInformationContainer>
        <Image src={avatar} alt="User avatar" />
        <Info>{username}</Info>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </ProfileInformationContainer>

      <List>
        <li>
          <span>Followers</span> <br />
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span> <br />
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span> <br />
          <span>{likes}</span>
        </li>
      </List>
    </ProfileContainer>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
