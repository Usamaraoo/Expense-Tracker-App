import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider  >
     <section className="container">

     <Header/>
     <div >
     <AddTransaction />
        <Balance />
        <IncomeExpense />
<center>
  <h2>Previous Transactions</h2>
</center>
        <TransactionList />
     </div>
     </section>
    </GlobalProvider>
  );
}

export default App;
