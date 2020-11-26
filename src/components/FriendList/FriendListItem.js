const FriendListItem = ({ status, avatar, name }) => {
  return (
    <li>
      <span>{status}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

export default FriendListItem;
