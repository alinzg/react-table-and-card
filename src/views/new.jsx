import React, { useEffect, useState } from "react";
import Form from "../components/form/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function New() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState();
  const invoicesAxios = () => {
    axios.get("http://localhost:3001/invoices").then((result) => {
      setInvoices(result.data);
    });
  };
  useEffect(() => {
    invoicesAxios();
  }, []);
  const newInvoice = (invoice) => {
    axios.post("http://localhost:3001/invoices", invoice).then(navigate("/"));
  };
  return <Form invoices={invoices} onSave={newInvoice} />;
}

export default New;
