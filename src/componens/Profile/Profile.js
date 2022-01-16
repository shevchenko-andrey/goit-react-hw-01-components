import PropTypes from 'prop-types';

import {
  ProfileCard,
  AvatarWrapper,
  Avatar,
  UserData,
  Stats,
  StatsItem,
  UserName,
  StatsLabel,
} from '../Profile/Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <AvatarWrapper>
        <Avatar src={avatar} alt="User avatar" />
      </AvatarWrapper>
      <UserData>
        <UserName>{username}</UserName>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </UserData>
      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <span>{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: (PropTypes.objectOf = {
    [PropTypes.string]: PropTypes.string,
    [PropTypes.string]: PropTypes.number,
  }),
};
