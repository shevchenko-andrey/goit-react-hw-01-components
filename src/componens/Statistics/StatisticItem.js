export function StatisticItem({ id, label, percentage }) {
  return (
    <StatisticItem key={id}>
      <span>{label}</span>
      <span>{percentage}</span>
    </StatisticItem>
  );
}
