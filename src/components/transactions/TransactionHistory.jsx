import '../transactions/transactions.css'
var PropTypes = require('prop-types');

const TransactionHistory = ({items}) => {

    return (

<table class="transaction-history">
  <thead class='tr-head'>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
{items.map(item => (
 
  <tr key={item.id} class='tr-item'>
    <td class='item-row '>{item.type}</td>
    <td class='item-row'>{item.amount}</td>
    <td class='item-row'>{item.currency}</td>
  </tr>



))}
</tbody>

</table>

    )

}

TransactionHistory.propTypes = {
type: PropTypes.string,
amount: PropTypes.number,
currency: PropTypes.string
}



export default TransactionHistory