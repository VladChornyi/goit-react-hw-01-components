import Stats from "./Stats/Stats";
import PropTypes from 'prop-types';
import s from './Profile.module.css'

const Profile = ({ user }) => {
  const { name, tag, avatar, location, stats } = user;
    return (
        <div className={s.profile}>
    <div className={s.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.name}>{tag}</p>
    <p className={s.name}>{location}</p>
  </div>
        <Stats stats={Object.entries(stats)}/>
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
