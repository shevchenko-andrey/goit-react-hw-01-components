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
