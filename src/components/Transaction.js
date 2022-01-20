import React, {useContext} from 'react';
import { GlobalContext } from '../components/ContextReducer';
 import { FaTrash } from 'react-icons/fa';
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <>
    
       <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.input}
      <span>{transaction.date} </span> 
      <span>{transaction.categoryOption} </span> <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn"> <FaTrash/></button>
     
    </li>
    </>
    
   
   
  )
}