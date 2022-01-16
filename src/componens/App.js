import PropTypes from 'prop-types';
import Profile from './Profile/Profile';
import Container from '../componens/Container/Container.styled';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendsList';
import TransactionsHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import friends from '../data/friendsList.json';
import transactions from '../data/transactionData.json';
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
        <TransactionsHistory transactions={transactions} />
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
