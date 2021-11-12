import React from "react";

import css from "./style.module.css";

const BurgerIngredient = (props) => {
  if (props.type === "bread-top")
    return (
      <div className={css.BreadTop}>
        <div className={css.Seed}></div>
        <div className={`${css.Seed} ${css.Second}`}></div>
        <div className={`${css.Seed} ${css.Third}`}></div>
        <div className={`${css.Seed} ${css.Fourth}`}></div>
      </div>
    );
  if (props.type === "salad") return <div className={css.Salad}></div>;
  if (props.type === "bacon") return <div className={css.Bacon}></div>;
  if (props.type === "meat") return <div className={css.Meat}></div>;
  if (props.type === "cheese") return <div className={css.Cheese}></div>;
  if (props.type === "bread-bottom")
    return <div className={css.BreadBottom}></div>;

  return <div>...</div>;
};

export default BurgerIngredient;
