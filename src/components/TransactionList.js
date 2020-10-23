import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {!!transactions.length > 0 ? (
          transactions.map((transaction) => (
            <li
              className={transaction.amount < 0 ? "minus" : "plus"}
              key={transaction.id}
            >
              {transaction.text}
              <span>
                {transaction.amount < 0 ? "-" : "+"}$
                {Math.abs(transaction.amount)}
                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  x
                </button>
              </span>
            </li>
          ))
        ) : (
          <li style={{ justifyContent: "center" }}>
            Add a new transaction to start ;)
          </li>
        )}
      </ul>
    </>
  );
}
