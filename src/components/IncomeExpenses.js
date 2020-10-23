import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +$
          {transactions
            .map((transaction) => transaction.amount)
            .filter((transaction) => transaction > 0)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          -$
          {Math.abs(
            transactions
              .map((transaction) => transaction.amount)
              .filter((transaction) => transaction < 0)
              .reduce((a, b) => a + b, 0)
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
