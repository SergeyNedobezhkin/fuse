import React from "react";
import style from "./ContantBlock.module.scss";

function ContantBlock({ joke }) {
  const date = joke.created_at.slice(0, 10).split("-").reverse().join(".");

  return (
    <div className={style.contantBlock}>
      <p className={style.jokeValue}>{joke.value}</p>
      <div className={style.jokeInfoWrapper}>
        <p className={style.jokeId}>{joke.id}</p>
        <p className={style.jokeDate}>{date}</p>
      </div>
    </div>
  );
}

export default ContantBlock;
