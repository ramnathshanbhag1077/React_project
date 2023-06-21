import './App.css';
import Expense from './Components/Expense';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
  const expense = [
    { title: "Car Insurance", date: new Date(2021, 2, 28), amount: 15000 },
    { title: "Headphones", date: new Date(2021, 2, 28), amount: 22000 },
    { title: "Desk", date: new Date(2021, 2, 28), amount: 2000 },
    { title: "Chair", date: new Date(2021, 2, 28), amount: 6000 },
  ]
  const addExpenseHandler = (expense)=>{
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expense expense ={expense}/>
    </div>
  );
}

export default App

