import style from './friends.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {


  return (
    <li className={style.friend_item}>
      <span
        className={ isOnline ? style.status : style.status_red}
        isOnline
      ></span>
      <img
        className={style.avatar}
        src={avatar}
        alt="User avatar"
      
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
