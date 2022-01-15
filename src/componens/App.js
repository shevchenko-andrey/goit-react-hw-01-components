import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import { Container } from '../componens/Container/Container.styled';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import friends from '../data/friendsList.json';
import transaction from '../data/transactionData.json';
import statistics from '../data/statistic.json';

function App() {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics statistics={statistics} title="Upload stats" />
        <Statistics statistics={statistics} />
        <FriendList friends={friends} />
        <TransactionHistory transaction={transaction} />
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

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

TransactionHistory.propTypes = {
  transaction: PropTypes.array.isRequired,
};

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default App;
