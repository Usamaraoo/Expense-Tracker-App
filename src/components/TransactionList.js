import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from '../components/Transaction'


export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    return (

        <div className="history">
            <ul  className="list">
                {transactions.map(transactions =>( 
                <Transaction key = {transactions.id}transactions={transactions}/> 
                
                ))}
                
            </ul>
        </div>
    )
}
