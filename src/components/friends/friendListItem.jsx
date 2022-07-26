
import friends from '../friends/friends'
import  '../friends/friends.css'

function FriendListItem ({avatar, name, isOnline}) {


return (

    friends.map(friend => (
<li class='friend-item' key = {friend.id}>
<img src={friend.avatar} class='friend-img' alt="" />
<p class='friend-name'>{friend.name}</p>

</li>

    ))
)

}

export default FriendListItem;