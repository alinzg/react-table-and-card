import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./form.module.css";

function Form({ invoices, invoice, id }) {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const customers = [...new Set(invoices?.map((a) => a.user))];
  const [error, setError] = useState();
  //   {
  //   user: "",
  //   price: "",
  //   status: "",
  // }

  async function createInvoice(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const invoiceData = {
      user: formData.get("user"),
      price: Number(formData.get("price")),
      status: formData.get("status"),
    };

    if (invoiceData.user == null || invoiceData.price === 0 || invoiceData.status == null) {
      setError({
        user: invoiceData.user ? null : "please select a customer",
        price: invoiceData.price ? null : "please enter amount of the invoice",
        status: invoiceData.status ? null : "please choose the status",
      });
    } else if (path === "/new") {
      axios.post("http://localhost:3001/invoices", {
        ...invoiceData,
        date: new Date().toISOString().split("T")[0],
      });
      navigate("/");
    } else {
      axios.put(`http://localhost:3001/invoices/${id}`, {
        ...invoiceData,
        date: new Date().toISOString().split("T")[0],
      });
      navigate("/");
    }
  }
  return (
    <main className={style["form-container"]}>
      <form onSubmit={createInvoice} className={style["form"]}>
        <div>
          <select name="user" id="" defaultValue={""}>
            <option value="" disabled>
              Select a customer
            </option>
            {customers?.map((customer, index) => (
              <option
                key={index}
                value={customer}
                selected={invoice?.user === customer ? "selected" : null}
              >
                {customer}
              </option>
            ))}
          </select>
          {error?.user ? <div className={style["error"]}>{error.user}</div> : null}
        </div>
        <div>
          <label htmlFor="">price:</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            pattern="d\+\.\d\d$"
            placeholder="Enter USD amount"
            name="price"
            defaultValue={invoice?.price}
            className={style["price-input"]}
          />
          {error?.price ? <div className={style["error"]}>{error.price}</div> : null}
        </div>
        <fieldset>
          <legend>Set the invoice status</legend>
          <div>
            <div>
              <input
                id="pending"
                name="status"
                type="radio"
                value="pending"
                defaultChecked={invoice?.status === "pending" ? "pending" : null}
              />
              <label htmlFor="pending">pending</label>
            </div>
            <div>
              <input
                id="paid"
                name="status"
                type="radio"
                value="paid"
                defaultChecked={invoice?.status === "paid" ? "paid" : null}
              />
              <label htmlFor="paid" className={style["paid"]}>
                paid
              </label>
            </div>
          </div>
          {error?.status ? <div className={style["error"]}>{error.status}</div> : null}
        </fieldset>
        <hr />
        <div>
          <Link to={"/"}>cancel</Link>
          <button type="submit">submit</button>
        </div>
      </form>
    </main>
  );
}

export default Form;
