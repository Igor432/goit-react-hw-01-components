import style from './user/profile.module.css';
import Profile from './user/Profile';
import user from '../components/user/user';
import data from './stats/data.json';
import Statistics from './stats/Statistics';
import FriendList from './friends/FriendList';
import friends from './friends/friends.json';
import transactions from './transactions/transactions';
import TransactionHistory from './transactions/TransactionHistory';

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
