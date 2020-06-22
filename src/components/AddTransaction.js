import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setAmount()
        setText('')

    }

    return (
        <div className="form-style-4 ">
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <label >
                    <span>What About</span><input required type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </label>
                <br />
                <label >
                    <span>Amount<br /> (negative - expense, positive - income)</span><br /><input required type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </label>
                <br />

                <label>
                    <span> </span><input type="submit" value="Add " />
                </label>
            </form>




        </div>
    )
}
