import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (Props) => {
    return <div className="expense-Item">
        <div className="expense-item__description">
            <ExpenseDate date={Props.expense.date} />
            <h2>{Props.expense.title}</h2>
            <div className="expense-item__price">Rs {Props.expense.amount}</div>
        </div>
    </div>
}

export default ExpenseItem