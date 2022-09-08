import FriendListItem from './FriendListItem.jsx';
import style from './friends.module.css';
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
friends: PropTypes.object
};

export default FriendList;
