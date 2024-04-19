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
    transactionOptions: transactionTypeOptions,
    transationListDetails: tarnsactionList,
  }

  onAddMoneyDetails = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newMoneyDetails = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transationListDetails: [
        ...prevState.transationListDetails,
        newMoneyDetails,
      ],
      title: '',
      amount: '',
    }))
  }

  onChangeAmount = event => {
    console.log(event.target.value)
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  render() {
    const {transactionOptions, transationListDetails} = this.state
    const {title, amount, type} = transationListDetails
    console.log(amount)
    console.log(type)
    return (
      <div className="bg-container">
        <div className="name-container">
          <h1 className="name"> Hi,Richard</h1>
          <p>
            Welcome back to your <span className="span">Money Manager</span>{' '}
          </p>
        </div>

        <MoneyDetails amountMoney={amount} typeRupees={type} />

        <div className="add-money-with-history-container">
          <div className="add-transcation-container">
            <h1 className="header">Add Transanction </h1>
            <form id="myForm" onSubmit={this.onAddMoneyDetails}>
              <label htmlFor="titleInput">TITLE</label>
              <input
                id="titleInput"
                className="input"
                type="text"
                placeholder="TITLE"
              />
              <label htmlFor="amountInput">AMOUNT</label>
              <input
                id="amountInput"
                className="input"
                type="text"
                placeholder="AMOUNT"
              />
              <label htmlFor="typeInput">TYPE</label>
              <select className="select-options" id="typeInput">
                {transactionOptions.map(eachItem => (
                  <option value={eachItem.optionId}>
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
            <div className="transaction-details">
              <p className="paragraph">Title</p>
              <p className="paragraph">Amount</p>
              <p className="paragraph">Type</p>
            </div>
            <ul>
              {transationListDetails.map(eachItem => (
                <TransactionItem
                  transactionListItem={eachItem}
                  key={eachItem.id}
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
