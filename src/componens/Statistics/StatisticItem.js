import PropTypes from 'prop-types';
import { Item } from './Statistics.styled';
function StatisticItem({ id, label, percentage }) {
  return (
    <Item key={id}>
      <span>{label}</span>
      <span>{percentage}</span>
    </Item>
  );
}

StatisticItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
