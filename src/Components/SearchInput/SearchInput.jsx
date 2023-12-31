import React from "react";
import style from "./SearchInput.module.scss";

function SearchInput({ setValueInput, valueInput }) {
  return (
    <form className={style.searchInputWrapper}>
      <input
        placeholder="Search jokes..."
        className={style.searchInput}
        onChange={(event) => setValueInput(event.target.value)}
        value={valueInput}
        type="text"
        autoFocus={true}
      ></input>
    </form>
  );
}

export default SearchInput;
