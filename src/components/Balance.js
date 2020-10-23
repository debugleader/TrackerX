import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h4>Your balance</h4>
      <h1>
        $
        {transactions
          .map((transaction) => transaction.amount)
          .reduce((a, b) => a + b, 0)}
      </h1>
    </>
  );
}
