
import '../friends/friends.css'




function FriendListItem ({id, avatar, name, isOnline}) {

return (

   
<li class='friend-item' key={id} >
    <span class='status' isOnline={isOnline} style={{
        backgroundColor: isOnline ? 'green' : 'red'
    }}></span>
  <img class="avatar" src={avatar} alt="User avatar" style={{
     width: '40px',
     height: 'auto',
     
  }} />
<p class="name">{name}</p>

</li>

)
}


export default FriendListItem;