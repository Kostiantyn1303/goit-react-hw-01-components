import { Section, StatItems, StatList, Title, Text } from './Statistics.styled';
import PropTypes from 'prop-types';
export function Statistics({ title, stats }) {
  return (
    <Section>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItems key={id}>
            <Text>{label}</Text> <br />
            <Text>{percentage}%</Text>
          </StatItems>
        ))}
      </StatList>
    </Section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
