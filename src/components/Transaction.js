import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Transaction = ({transactions}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transactions.amount <0 ? '-' : '+';

    return (
        <div>
        <li className={transactions.amount < 0 ? 'minus':'plus'}>
        {transactions.text}
         <span><strong>{sign}${Math.abs( transactions.amount) } </strong></span>
         <button className="delete-btn" onClick={() => deleteTransaction(transactions.id)} className="delete-btn">x</button>
        </li> 
        </div>
    )
}
