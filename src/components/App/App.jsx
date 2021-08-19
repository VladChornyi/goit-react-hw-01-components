import FriendList from "../FriendList/FriendList";
import friends from '../../assets/friends.json';
import Profile from "../Profile/Profile";
import user from '../../assets/user.json'
import Statistics from "../Statistics/Statistics";
import statisticalData from "../../assets/statistical-data.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../assets/transactions.json"


const App = () => {
  return (
    <>
      <FriendList friends={friends}/>
      <Profile user={user}/>
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <TransactionHistory transactions={transactions}/>
    </>
  );
}

export default App;
