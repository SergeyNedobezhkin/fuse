import React, { useState } from "react";
import style from "./SearchInput.module.scss";
function SearchInput({ setValueInput, valueInput, handleSearch }) {
  return (
    <form className={style.searchInputWrapper} onSubmit={handleSearch}>
      <input
        placeholder="Search jokes..."
        className={style.searchInput}
        onChange={(event) => setValueInput(event.target.value)}
        value={valueInput}
        type="text"
      ></input>
    </form>
  );
}

export default SearchInput;
