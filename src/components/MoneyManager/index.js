import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const tarnsactionList = []

class MoneyManager extends Component {
  state = {
    transationListDetails: tarnsactionList,
    title: '',
    amount: '',
    type: 'INCOME',
  }

  onAddMoneyDetails = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    console.log(type)
    const newMoneyDetails = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    console.log(newMoneyDetails)

    this.setState(prevState => ({
      transationListDetails: [
        ...prevState.transationListDetails,
        newMoneyDetails,
      ],
    }))

    this.clearInputs()
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  updatedMoneyList = id => {
    const {transationListDetails} = this.state
    const updatedList = transationListDetails.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({transationListDetails: updatedList})
  }

  clearInputs() {
    this.setState({title: '', amount: ''})
  }

  render() {
    const {transationListDetails, title, amount} = this.state

    return (
      <div className="bg-container">
        <div className="name-container">
          <h1 className="name"> Hi,Richard</h1>
          <p>
            Welcome back to your <span className="span">Money Manager</span>{' '}
          </p>
        </div>

        <MoneyDetails moneyDetailsList={transationListDetails} />

        <div className="add-money-with-history-container">
          <div className="add-transcation-container">
            <h1 className="header">Add Transaction </h1>
            <form id="myForm" onSubmit={this.onAddMoneyDetails}>
              <label className="label" htmlFor="titleInput">
                TITLE
              </label>
              <input
                id="titleInput"
                className="input"
                type="text"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label className="label" htmlFor="amountInput">
                AMOUNT
              </label>
              <input
                id="amountInput"
                className="input"
                type="text"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label className="label" htmlFor="typeInput">
                TYPE
              </label>

              <select
                id="typeInput"
                className="select-options"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {' '}
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1>History</h1>
            <div className="transaction-details-headings">
              <p className="paragraph">Title</p>
              <p className="paragraph">Amount</p>
              <p className="paragraph">Type</p>
            </div>
            <ul className="transaction-details-container">
              {transationListDetails.map(eachItem => (
                <TransactionItem
                  transactionListItem={eachItem}
                  key={eachItem.id}
                  updatedMoneyList={this.updatedMoneyList}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
