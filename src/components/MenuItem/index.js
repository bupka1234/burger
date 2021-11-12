import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const MenuItem = props => (
  <li className={css.MenuItem}>
    <NavLink exact={props.exact} activeClassName={css.active} to={props.link}>
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
