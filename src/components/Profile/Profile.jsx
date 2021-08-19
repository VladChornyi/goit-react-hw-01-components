import Stats from "./Stats/Stats";
import PropTypes from 'prop-types';
import s from './Profile.module.css'

const Profile = ({user}) => {
    return (
        <div className={s.profile}>
    <div className={s.description}>
    <img
      src={user.avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <p className={s.name}>{user.name}</p>
    <p className={s.name}>{user.tag}</p>
    <p className={s.name}>{user.location}</p>
  </div>
        <Stats stats={Object.entries(user.stats)}/>
</div>
    );
}

export default Profile;

Profile.propTypes = {
  user:
    
    PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        tag: PropTypes.string,
      location: PropTypes.string,
        stats: PropTypes.object,
      }
      )
}
