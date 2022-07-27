
import Profile from "./user/profile";
import user from '../components/user/user'
import data from './stats/data.json';
import Statistics from './stats/statistics'
import FriendList from "./friends/friendList";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexGrow: 3,
        flexWrap: 'wrap',
      }}
     
    >
       <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics stats={data} />


<FriendList/>


    </div>
  );
};
