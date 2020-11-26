import PropTypes, { number, string } from 'prop-types';
import StatisticsList from './StatisticsList';

const Statistics = ({ stats }) => {
  return (
    <section>
      <h2>Upload stats</h2>
      <StatisticsList items={stats} />
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: string.isRequired,
      label: string.isRequired,
      percentage: number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
