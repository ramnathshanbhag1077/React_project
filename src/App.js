import './App.css';
import Expense from './Components/Expense';

function App() {
  const expense = [
    { title: "Car Insurance", date: new Date(2021, 2, 28), amount: 15000 },
    { title: "Headphones", date: new Date(2021, 2, 28), amount: 22000 },
    { title: "Desk", date: new Date(2021, 2, 28), amount: 2000 },
    { title: "Chair", date: new Date(2021, 2, 28), amount: 6000 },
  ]
  return (
    <div className="App">
      <h1>Lets get started</h1>
      <Expense expense ={expense}/>
    </div>
  );
}

export default App

