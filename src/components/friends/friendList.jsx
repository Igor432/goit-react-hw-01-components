import FriendListItem from "./friendListItem";
import '../friends/friends.css'
var PropTypes = require('prop-types'); // ES5 with npm

const FriendList = ({friends}) => {


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


FriendListItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
   title: PropTypes.string
    }

export default FriendList;