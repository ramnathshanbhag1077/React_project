import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
const Expense = (props) => {

    return <>
        <div className="expenses">
            <ExpenseItem expense={props.expense[0]} />
            <ExpenseItem expense={props.expense[1]} />
            <ExpenseItem expense={props.expense[2]} />
            <ExpenseItem expense={props.expense[3]} />
        </div>
    </>

}
export default Expense
