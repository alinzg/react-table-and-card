import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./toggle.module.css"

function TableAndCardsToggle() {
  return (
    <header className={style["header"]}>
        <NavLink to={"/"}>table</NavLink>
        <NavLink to={"/cards"}>card</NavLink>
    </header>
  )
}

export default TableAndCardsToggle