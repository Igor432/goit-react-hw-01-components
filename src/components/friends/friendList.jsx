import FriendListItem from './FriendListItem.jsx';
import style from '../friends/friends.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend_list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  title: PropTypes.string,
};

export default FriendList;
