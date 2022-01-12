import { Friend } from './Friend';
import { List } from './FriendList.styled';

export function FriendList({ friends }) {
  return <List>{friends.map(Friend)}</List>;
}
