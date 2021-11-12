import React from "react";

import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц : Гахайн мах : {props.order.orts.bacon}, Салад :{" "}
        {props.order.orts.salad}, Үхрийн мах : {props.order.orts.meat}, Бяслаг :{" "}
        {props.order.orts.cheese}
      </p>
      <p>
        Хаяг : {props.order.hayag.name} | {props.order.hayag.street} |
        {props.order.hayag.city}
      </p>
      <p>
        Үнийн дүн : <strong>{props.order.dun}₮</strong>
      </p>
    </div>
  );
};

export default Order;
