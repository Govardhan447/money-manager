import './index.css'

const MoneyDetails = prop => {
  const {moneyDetailsList} = prop
  console.log(moneyDetailsList)
  let income = 0
  let expenses = 0
  let totalBalence = 0

  if (moneyDetailsList.length === 0) {
    income = 0
    expenses = 0
  } else {
    moneyDetailsList.map(eachItem =>
      eachItem.type === 'INCOME'
        ? (income += parseInt(eachItem.amount))
        : (expenses += parseInt(eachItem.amount)),
    )
  }
  totalBalence = income - expenses

  return (
    <div className="Money-details-container">
      <div className="Money-balence">
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div>
          <p className="your-balance" data-testid="balanceAmount">
            Your Balance
          </p>
          <p className="amount">Rs {totalBalence}</p>
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
          <p className="your-income" data-testid="incomeAmount">
            Your Income
          </p>
          <p className="income">Rs {income}</p>
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
          <p className="your-expenses" data-testid="expensesAmount">
            Your Expenses
          </p>
          <p className="expenses">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
