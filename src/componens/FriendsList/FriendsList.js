import { Friend } from './Friend';
import friends from '../../data/friendsList.json';
import { List } from './FriendList.styled';

export function FriendList() {
  return <List>{friends.map(Friend)}</List>;
}
