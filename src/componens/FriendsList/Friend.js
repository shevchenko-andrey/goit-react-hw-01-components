import PropTypes from 'prop-types';
import { Item, Online, Offline, Name } from './FriendList.styled';

function Friend({ id, isOnline, avatar, name }) {
  return (
    <Item key={id}>
      {isOnline ? <Online></Online> : <Offline></Offline>}
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default Friend;
