import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(item => {
        const { id, isOnline, name, avatar } = item;
        return (
          <FriendListItem
            key={id}
            status={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendList;
