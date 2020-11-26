import PropTypes from 'prop-types';
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
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
