
import '../friends/friends.css'
var PropTypes = require('prop-types'); // ES5 with npm




const FriendListItem = ({ avatar, name, isOnline}) => {

return (

   
<li class='friend-item'  >
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

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string

  }



export default FriendListItem;