
import '../friends/friends.css'




function FriendListItem ({id, avatar, name, isOnline}) {

return (

   
<li class='friend-item' key={id} >
    <span class='status' isonline={isOnline} style={{
        backgroundColor: isOnline ? 'green' : 'red'
    }}></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48px" />
<p class="name">{name}</p>

</li>

)
}


export default FriendListItem;