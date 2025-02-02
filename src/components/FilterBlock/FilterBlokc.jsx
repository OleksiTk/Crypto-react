import React from "react";
import { useEffect, useRef, useState } from "react";

import "./style.css";
function FilterBlokc({ setCoins, coins }) {
  const [value, setValue] = useState("");
  console.log("--rende");

  //   const inputRef = useRef(""); За допомгою нього можна все що хочеш достати
  useEffect(() => {
    const filterCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value);
    });
    setCoins(filterCoins);
  }, [value]);
  return (
    <div className="filter-block">
      <input
        // ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="input"
        placeholder="bitcoin"
      />
    </div>
  );
}
export default React.memo(FilterBlokc);
