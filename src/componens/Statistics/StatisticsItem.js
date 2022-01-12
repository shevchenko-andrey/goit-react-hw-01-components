import { Item, Label } from './Statistics.styled';
export function StatisticItem({ id, label, percentage }) {
  return (
    <Item key={id}>
      <Label>{label}</Label>
      <Label>{percentage}</Label>
    </Item>
  );
}
