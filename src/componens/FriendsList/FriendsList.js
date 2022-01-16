import PropTypes from 'prop-types';

import Friend from './Friend';
import { List } from './FriendList.styled';

function FriendList({ friends }) {
  return <List>{friends.map(Friend)}</List>;
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
