import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import { Container } from '../componens/Container/Container.styled';
import { StatisticSection } from './Statistics/StaisticSection';
import user from '../data/user.json';

function App() {
  return (
    <>
      <Container>
        <Profile
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        ></Profile>

        <StatisticSection></StatisticSection>
      </Container>
    </>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default App;
