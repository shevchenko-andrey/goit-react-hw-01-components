import PropTypes from 'prop-types';

import { Section, List, Title } from './Statistics.styled';
import StatisticItem from './StatisticItem';

function Statistics({ statistics, title }) {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      <List>{statistics.map(StatisticItem)}</List>
    </Section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array.isRequired,
};
export default Statistics;
