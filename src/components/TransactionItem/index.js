import './index.css'

const TransactionItem = props => {
  const {transactionListItem, updatedMoneyList} = props
  const {id, title, amount, type} = transactionListItem

  console.log(transactionListItem)
  const onclickDelete = () => {
    updatedMoneyList(id)
  }
  const lowCase = type.toLowerCase()

  const typeCase =
    lowCase.charAt(0).toUpperCase() + lowCase.substring(1).toLowerCase()

  return (
    <li className="transaction-details">
      <p className="paragraph">{title}</p>
      <p className="paragraph">{amount}</p>
      <p className="paragraph">{typeCase}</p>S
      <div className="delete-container">
        <button
          className="delete-btn"
          data-testid="delete"
          type="button"
          onClick={onclickDelete}
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
