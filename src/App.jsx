import './App.css'
import Expenses from "./components/expenses/Expenses.jsx";

const expenses = [
  {
    title: "Toilet paper",
    price: 94,
    date: new Date(),
    id: 1,
  },
  {
    title: "New TV",
    price: 799,
    date: new Date(),
    id: 2,
  },
  {
    title: "Macbook",
    price: 799,
    date: new Date(),
    id: 3,
  },
  {
    title: "Iphone",
    price: 799,
    date: new Date(),
    id: 4,
  },
]

function App() {

  return (
    <div>
      <Expenses data={expenses}/>
    </div>
  )
}

export default App
