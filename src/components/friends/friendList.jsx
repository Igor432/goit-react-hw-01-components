import FriendListItem from "./friendListItem";
import '../friends/friends.css'



function FriendList ({friends}) {


 return (
<ul class="friend-list">

{friends.map(friend => (  

<FriendListItem
key = {friend.id}
name = {friend.name}
avatar = {friend.avatar}
isOnline = {friend.isOnline}

/>
))}
</ul>
 )
}

export default FriendList;