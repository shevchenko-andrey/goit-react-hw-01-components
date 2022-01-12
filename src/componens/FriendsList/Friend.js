import { Item, Online, Offline, Name } from './FriendList.styled';
export function Friend({ id, isOnline, avatar, name }) {
  return (
    <Item key={id}>
      {isOnline ? <Online></Online> : <Offline></Offline>}
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}
