import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import styles from './Statistics.module.css';

const Statistics = ({ stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
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
