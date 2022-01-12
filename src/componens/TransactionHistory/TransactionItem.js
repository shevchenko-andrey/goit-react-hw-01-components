import { TableItemStyle } from './TransactionHistory.styled';
export function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <TableItemStyle>{type}</TableItemStyle>
      <TableItemStyle>{amount}</TableItemStyle>
      <TableItemStyle>{currency}</TableItemStyle>
    </tr>
  );
}
