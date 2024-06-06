import React, { useEffect, useState } from "react";
import Form from "../components/form/form";
import axios from "axios";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [invoices, setInvoices] = useState();
  const [findedUser, setFindedUser] = useState();
  const invoicesAxios = () => {
    axios.get("http://localhost:3001/invoices").then((result) => {
      setInvoices(result.data);
    });
    axios.get(`http://localhost:3001/invoices/${id}`).then((result) => {
      setFindedUser(result.data);
    });
  };
  useEffect(() => {
    invoicesAxios();
  }, []);
  return <Form invoices={invoices} invoice={findedUser} id={id} />;
}

export default Edit;
