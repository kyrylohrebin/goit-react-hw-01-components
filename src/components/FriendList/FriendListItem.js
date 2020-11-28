import styles from './FriendListItem.module.css';

const FriendListItem = ({ status, avatar, name }) => {
  const onlineStatus = status
    ? `${styles.status} ${styles.isOnline}`
    : `${styles.status} ${styles.isOffline}`;
  return (
    <li className={styles.item}>
      <span className={onlineStatus}>{status}</span>
      <img src={avatar} alt={name} width="48" className={styles.avatar} />
      <p className={name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
