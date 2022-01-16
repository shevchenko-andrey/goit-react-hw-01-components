import PropTypes from 'prop-types';

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
TransactionItem.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
