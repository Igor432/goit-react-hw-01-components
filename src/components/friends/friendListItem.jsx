
import friends from '../friends/friends'
import '../friends/friends.css'




const FriendListItem = ({ avatar, name}) => {



return (

    friends.map(friend => (
<li class='friend-item' key={friend.id} >
    <span class='friendOnline' isonline={friend.isOnline.toString()} style={{
        backgroundColor: friend.isOnline ? 'green' : 'red'
    }}></span>
<img src={avatar} class='friend-img' alt="" />
<p class='friend-name'>{name}</p>

</li>

    ))
)
}


export default FriendListItem;