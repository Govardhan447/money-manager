import './index.css'

const TransactionItem = props => {
  const {transactionListItem} = props
  const {id, title, amount, type} = transactionListItem
  return (
    <div className="transaction-details">
      <p className="paragraph">{title}</p>
      <p className="paragraph">{amount}</p>
      <p className="paragraph">{type}</p>
    </div>
  )
}

export default TransactionItem
