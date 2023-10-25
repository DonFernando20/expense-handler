import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Groceries",
    amount: 294.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 800.2,
    date: new Date(2021, 1, 1),
  },
  {
    id: "e3",
    title: "New Laptop",
    amount: 1399.0,
    date: new Date(2019, 4, 20),
  },
  {
    id: "e4",
    title: "New Bike",
    amount: 1070.8,
    date: new Date(2020, 5, 27),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    }); //This is the clean way of updating a state based on a previous snapshot of the same state.
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
    //{expenses} here makes reference to the expenses variable defined above. We're passing it down to the Expenses component
  );
};

export default App;
