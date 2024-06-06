import React, { useEffect, useState } from "react";
import TableAndCardsToggle from "../components/table-and-cards-toggle/table-and-cards-toggle";
import Table from "../components/table-and-cards-assets/table/table";
import Cards from "../components/table-and-cards-assets/cards/cards";
import axios from "axios";

function TableAndCards() {
  const viewPath = window.location.pathname;
  const [invoices, setInvoices] = useState();
  const invoicesAxios = () => {
    axios
      .get("http://localhost:3001/invoices")
      .then((result) => {
        setInvoices(result.data);
      })
      .catch((error) => {
        console.log(error);
        alert(`API Server is not running.

Use this command in your terminal to run it:
json-server -w data/db.json -p 3001`);
      });
  };
  useEffect(() => {
    invoicesAxios();
  }, []);
  const ondeleteHandler = (id) => {
    axios.delete(`http://localhost:3001/invoices/${id}`);
    invoicesAxios();
    invoicesAxios();
  };
  return (
    <div>
      <TableAndCardsToggle />
      {viewPath === "/" ? (
        <Table invoices={invoices} ondelete={ondeleteHandler} />
      ) : (
        <Cards invoices={invoices} />
      )}
    </div>
  );
}

export default TableAndCards;
