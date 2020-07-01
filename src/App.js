import React from "react";
import "./App.css";
import QuotationList from "./components/QuotationList";
import { ContextProvider } from "./context/QuotationContext";

function App() {
  return (
    <ContextProvider>
      <QuotationList />
    </ContextProvider>
  );
}

export default App;
