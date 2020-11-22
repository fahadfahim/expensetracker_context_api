import React,{ useContext } from 'react'
//anything pull from globalContext we have to use
//useContext
//access to global context
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction'
export default function TransactionList() {
  //grab from globalContext
  // const context = useContext(GlobalContext);
  //insted of using contex we can use desturcturing
  const { transactions }= useContext(GlobalContext);

 // console.log(transactions);
    return (
      <>
        <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
      </>
    )
}
