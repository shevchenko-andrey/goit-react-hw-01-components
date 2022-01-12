import { Section, List, Title } from './Statistics.styled';
import { StatisticItem } from './StatisticsItem';
import statistics from '../../data/statistic.json';

export function StatisticSection() {
  return (
    <Section>
      <Title>Upload stats</Title>
      <List>{statistics.map(StatisticItem)}</List>
    </Section>
  );
}
