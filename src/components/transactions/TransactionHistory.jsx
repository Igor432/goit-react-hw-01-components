import style from '../transactions/transactions.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transaction_history}>
      <thead className={style.tr_head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={style.tr_item}>
            <td className={style.item_row}>{item.type}</td>
            <td className={style.item_row}>{item.amount}</td>
            <td className={style.item_row}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {

  items: PropTypes.shape({
    id: PropTypes.string.isRequired,    
type: PropTypes.string.isRequired,
amount: PropTypes.number.isRequired,
currency: PropTypes.string.isRequired
  }).isRequired,   

};

export default TransactionHistory;
