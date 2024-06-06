import React from "react";
import style from "./cards.module.css";

function Cards({ invoices }) {
  return (
    <main className={style["container-main"]}>
      <div className={style["container"]}>
        {invoices?.map((invoice, index) => (
          <div key={index} className={style["card"]}>
            <div>{invoice.user}</div>
            <div>{invoice.price}</div>
            <div>{invoice.status}</div>
            <div>{invoice.date}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Cards;
