import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../components/ContextReducer';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Expenses History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}