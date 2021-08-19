import s from './TransactionHistory.module.css'
import PropTypes from 'prop-types';
const TransactionHistory = ({ transactions }) => {
    return (
        <table className={s.table}>
            <thead className={s.head}>
                <tr>
                <th className={s.tblock}>Type</th>
                <th className={s.tblock}>Amount</th>
                <th className={s.tblock}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td className={s.tableItem}>{transaction.type}</td>
                        <td className={s.tableItem}>{transaction.amount}</td>
                        <td className={s.tableItem}>{transaction.currency}</td>
                </tr>
                ))  }
            </tbody>
        </table>
    );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.object
    )
}