import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import { StatisticItem } from './Statistics/StatisticItem';
import { Section } from '../componens/Statistics/Statistics.styled';
import { Container } from '../componens/Container/Container.styled';
import { StatisticsList } from '../componens/Statistics/Statistics.styled';
import user from '../data/user.json';
import statistics from '../data/statistic.json';
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
      </Container>
      <Section key={'statistic'}>
        <Container>
          <h2>Upload stats</h2>
          <StatisticsList>{statistics.map(StatisticItem)}</StatisticsList>
        </Container>
      </Section>
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
