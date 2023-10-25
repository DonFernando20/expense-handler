import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredSetYear] = useState("2020");
  const yearChangeHandler = (selectedYear) => {
    setFilteredSetYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // filteredExpenses.length === 0 ? (
  //   <p>No expenses found.</p>
  // ) : (
  //   filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // );

  return (
    //We wanna render one expense item per element in the array. We use {} to execute a dynamic expression in our JSX code.
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeYear={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
