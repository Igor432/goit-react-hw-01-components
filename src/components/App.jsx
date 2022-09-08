import React from 'react';
import Profile from './user/Profile.jsx';
import user from '../components/user/user';
import data from './stats/data.json';
import Statistics from '../components/stats/Statistics.jsx';
import FriendList from './friends/FriendList.jsx';
import friends from './friends/friends.json';
import transactions from './transactions/transactions';
import TransactionHistory from './transactions/TransactionHistory.jsx';
import '../index.css';

export const App = () => {
  return (
    <div class="main_div">
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
