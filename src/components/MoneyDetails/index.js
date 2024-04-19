import './index.css'

const MoneyDetails = props => {
  const {amountMoney, typeRupess} = props
  return (
    <div className="Money-details-container">
      <div className="Money-balence">
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balence"
          />
        </div>
        <div>
          <p className="your-balance">Your Balance</p>
          <p className="amount">Rs.{amountMoney}</p>
        </div>
      </div>

      <div className="Money-income">
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div>
          <p className="your-income">Your Balance</p>
          <p className="income">Rs.{amountMoney}</p>
        </div>
      </div>

      <div className="Money-expenses">
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div>
          <p className="your-expenses">Your Expenses</p>
          <p className="expenses">Rs.{amountMoney}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
