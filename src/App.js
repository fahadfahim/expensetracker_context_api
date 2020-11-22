import React, { Component } from 'react';

import './App.css';
import AddTransaction from './component/AddTransaction';
import Balance from './component/Balance';
import Header from './component/Header';
import IncomeExpenses from './component/IncomeExpenses';
import TransactionList from './component/TransactionList';
//for provider
import { GlobalProvider } from './context/GlobalState'
class App extends Component {
  render(){
    return (
      <GlobalProvider>
        <Header />
        <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
