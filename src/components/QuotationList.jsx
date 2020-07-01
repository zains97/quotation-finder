import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/QuotationContext";

const QuotationList = () => {
  let [quotes, setQuotes] = useContext(GlobalContext);
  let [quotationId, setQuotationId] = useState(1);

  return (
    <div>
      {quotationId <= quotes.length
        ? quotes
            .filter((quote) => quote.id == quotationId)
            .map((title) => title.title)
        : setQuotationId(1)}
      <button
        onClick={() => {
          setQuotationId(++quotationId);
        }}
      >
        Next Quote
      </button>
    </div>
  );
};

export default QuotationList;
