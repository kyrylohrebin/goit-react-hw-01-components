import styles from './StatisticsList.module.css';

const StatisticsList = ({ items }) => {
  return (
    <ul className={styles.statistics_list}>
      {items.map(item => (
        <li className={`${styles.item} ${styles.id1}`} key={item.id}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{`${item.percentage}%`}</span>
        </li>
      ))}
    </ul>
  );
};

export default StatisticsList;
