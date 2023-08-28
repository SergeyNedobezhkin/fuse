import React from "react";
import style from "./FoundJokes.module.scss";

function FoundJokes({ jokes }) {
  return (
    <div className={style.foundJokesWrapper}>
      <p className={style.foundJokes}>Found jokes: {jokes.length}</p>
    </div>
  );
}

export default FoundJokes;
