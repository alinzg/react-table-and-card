import React from "react";
import style from "./table.module.css";
import { Link } from "react-router-dom";

function Table({ invoices, ondelete }) {
  return (
    <main>
      <div className={style["container"]}>
        <Link to={"/new"} className={style["create-new-invoice"]}>
          create new invoice
        </Link>
        <div className={style["table"]}>
          <div className={style["row"]}>
            <div>id</div>
            <div>user</div>
            <div>price</div>
            <div>status</div>
            <div>date</div>
          </div>
          {invoices?.map((invoice, index) => (
            <div key={index} className={style["row"]}>
              <div>{invoice.id}</div>
              <div>{invoice.user}</div>
              <div>{invoice.price}</div>
              <div className={invoice.status === "paid" ? style["paid"] : null}>
                {invoice.status}
              </div>
              <div>{invoice.date}</div>
              <Link to={`edit/${invoice.id}`}>edit</Link>
              <button onClick={ondelete.bind(null, invoice.id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Table;
