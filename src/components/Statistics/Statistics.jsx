import { Section, StatItems, StatList, Title, Text } from './Statistics.styled';
import PropTypes from 'prop-types';
export function Statistics({ stats }) {
  return (
    <Section>
      <Title>Upload stats</Title>

      <StatList>
        {stats.map(stat => (
          <StatItems key={stat.id}>
            <Text>{stat.label}</Text> <br />
            <Text>{stat.percentage}%</Text>
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
