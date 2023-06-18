import './ExpenseDate.css'
const ExpenseDate = (Props) => {
    const month = Props.date.toLocaleString('en-US', { month: 'long' });
    const year = Props.date.getFullYear();
    const day = Props.date.toLocaleString('en-US', { month: '2-digit' });

    return <>
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__month">{year}</div>
            <div className="expense-date__month">{day}</div>
        </div>
    </>
}

export default ExpenseDate