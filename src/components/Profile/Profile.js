import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="Аватар пользователя" />
        <p>{name}</p>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
