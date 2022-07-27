import  '../user/profile.css';
var PropTypes = require('prop-types'); // ES5 with npm


const Profile = ({avatar, username, tag, location, label, stats}) => {

    return (
<div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username} </p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span className={label}>Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className={label}>Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span className={label}>Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>

)
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
 label: PropTypes.string,
 views: PropTypes.number,
 likes: PropTypes.number
  }


  export default Profile;