import './ExpenseForm.css'
import React, {useState} from 'react'
const ExpenseForm = (props)=>{

    const [enteredTitle ,setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate , setDate] = useState('');

    const titleChangeHandler = (event)=>{
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event)=>{
       setAmount(event.target.value)
    }

    const dateChangeHandler = (event)=>{
        setDate(event.target.value)
    }

    const inputHandler = (identifier,value)=>{
        if(identifier==='title'){
            setTitle(value);
        }
        else if(identifier==='amount'){
            setAmount(value);
        }
        else{
            setDate(value);
        }
    }

    const submitButtonHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }


    return <>
    <form onSubmit={submitButtonHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={(event)=> inputHandler('title',event.target.value)}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2020-01-01" max="2024-01-01" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type='submit' onChange={submitButtonHandler}>Add Expense</button>
            </div>
        </div>
    </form>
    </>

}
export default ExpenseForm