import { TransactionTable } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem';
import transaction from '../../data/transactionData.json';

export function TransactionHistory() {
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
