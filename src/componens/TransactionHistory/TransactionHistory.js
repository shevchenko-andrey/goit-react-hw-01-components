import { TransactionTable } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem';

export function TransactionHistory({ transaction }) {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transaction.map(TransactionItem)}</tbody>
    </TransactionTable>
  );
}
