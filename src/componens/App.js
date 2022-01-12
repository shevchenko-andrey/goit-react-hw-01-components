import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import { Container } from '../componens/Container/Container.styled';
import { StatisticSection } from './Statistics/StaisticSection';
import { FriendList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import friends from '../data/friendsList.json';
import transaction from '../data/transactionData.json';

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
        <FriendList friends={friends}></FriendList>
        <TransactionHistory transaction={transaction}></TransactionHistory>
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
  friends: PropTypes.array,
};

TransactionHistory.propTypes = {
  friends: PropTypes.array,
};

export default App;
