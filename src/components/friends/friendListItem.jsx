import style from '../friends/friends.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.friend_item}>
      <span
        className={style.status}
        isOnline={isOnline}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></span>
      <img
        className={style.avatar}
        src={avatar}
        alt="User avatar"
        style={{
          width: '40px',
          height: 'auto',
        }}
      />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
