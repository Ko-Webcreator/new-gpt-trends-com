import React from "react";
import searchStyles from "./search.module.scss";

type Props = {
  isDisplaySearch: boolean;
};

const Search = ({ isDisplaySearch }: Props) => {
  return (
    <search
      className={`${searchStyles.wrap} ${
        isDisplaySearch ? searchStyles.on : ""
      }`}
    >
      <input type="text" />
      <button type="button">Search</button>
    </search>
  );
};

export default Search;
