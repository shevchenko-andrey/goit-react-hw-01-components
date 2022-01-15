import { Section, List, Title } from './Statistics.styled';
import { StatisticItem } from './StatisticsItem';

export function Statistics({ statistics, title }) {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      <List>{statistics.map(StatisticItem)}</List>
    </Section>
  );
}
