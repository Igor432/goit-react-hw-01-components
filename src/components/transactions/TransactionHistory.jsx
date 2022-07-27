import '../transactions/transactions.css'

function TransactionHistory ({items}) {

    return (

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
{items.map(item => (
 
  <tr key={item.id}>
    <td class='item-row'>{item.type}</td>
    <td class='item-row'>{item.amount}</td>
    <td class='item-row'>{item.currency}</td>
  </tr>



))}
</tbody>

</table>

    )

}

export default TransactionHistory