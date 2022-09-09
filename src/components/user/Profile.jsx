import style from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ avatar, username, tag, location, label, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar shit" className={style.avatar} />
        <p className={style.name}>{username} </p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,

  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
 
};

export default Profile;
