import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const handleForm = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.floor(Math.random() * 1000),
      text,
      amount: +amount,
    });
  };
  return (
    <>
      <h3>Add a new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount: <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <br />
        <button
          className="btn"
          onClick={handleForm}
          style={{ borderRadius: "10px" }}
        >
          Add transaction
        </button>
      </form>
    </>
  );
}
