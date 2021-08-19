import PropTypes from 'prop-types';
import s from './FriendsItem.module.css'
const FriendsItem = ({ avatar, name, isOnline }) => {
    return (
                         <li key={name} className={s.item}>
                            <span className={ isOnline ? s.online : s.offline}></span>
                            <img className={s.avatar} src={avatar} alt={name} width="48" />
                             <p className={s.name}>{name}</p>
                        </li>
        
    );
}

export default FriendsItem;


FriendsItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}