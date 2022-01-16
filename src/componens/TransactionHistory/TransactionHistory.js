import PropTypes from 'prop-types';
import { TransactionTable } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem';

function TransactionsHistory({ transactions }) {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactions.map(TransactionItem)}</tbody>
    </TransactionTable>
  );
}
TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default TransactionsHistory;
