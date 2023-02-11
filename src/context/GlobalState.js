import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Laptop", amount: 750 },
    { id: 2, text: "iPhone", amount: -630 },
    { id: 3, text: "Camera", amount: 250 },
    { id: 4, text: "Flower", amount: 10 },
  ],
};

//create context

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
