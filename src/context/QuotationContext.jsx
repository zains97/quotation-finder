import React, { createContext, useState, Children } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  let [quotes, setQuotes] = useState([
    {
      id: 1,
      title: "Bill Gates 1",
      quote: "Never Give Up 1",
    },
    {
      id: 2,
      title: "Bill Gates 2 ",
      quote: "Never Give Up 2",
    },
    {
      id: 3,
      title: "Bill Gates 3",
      quote: "Never Give Up 3",
    },
    {
      id: 4,
      title: "Bill Gates 4",
      quote: "Never Give Up 4",
    },
  ]);
  return (
    <GlobalContext.Provider value={[quotes, setQuotes]}>
      {children}
    </GlobalContext.Provider>
  );
};
