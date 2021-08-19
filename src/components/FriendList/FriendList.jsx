
import FriendsItem from './FriendsItem/FriendsItem';
import s from './FriendList.module.css'

const FriendList = ({friends }) => {

    console.log(friends);

    return (
       
            <ul className={s.friendList}>
                {friends.map(({ id, avatar, name, isOnline }) =>(
                        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
                    ))}
            </ul>
    )
}

export default FriendList;

