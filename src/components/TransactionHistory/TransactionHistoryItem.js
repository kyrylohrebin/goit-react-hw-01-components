import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={styles.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
