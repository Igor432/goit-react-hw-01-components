import style from './user/Profile.module.css';
import Profile from './user/Profile.jsx';
import user from '../components/user/user';
import data from './stats/data.json';
import Statistics from './stats/Statistics.jsx';
import FriendList from './friends/FriendList.jsx';
import friends from './friends/friends.json';
import transactions from './transactions/transactions';
import TransactionHistory from './transactions/TransactionHistory.jsx';

export const App = () => {
  return (
    <div className={style.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
