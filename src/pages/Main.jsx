import { getCoins } from "../api/api";
import Card from "../components/Card/Card";
import CardList from "../components/CardList/CardList";
import FilterBlokc from "../components/FilterBlock/FilterBlokc";
import styles from "./style.module.css";
import { Context } from "../components/context/Context";
import { createContext, useState, useEffect } from "react";

export default function Main() {
  const [balance, setBalance] = useState(5000);
  const [coins, setCoins] = useState([]);
  const [filtercoins, setFilters] = useState([]);
  function AddBlance() {
    setBalance(balance + 1000);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilters(data.coins);
    };
    fetchData();
  }, []);
  return (
    <Context.Provider value={{ coins, filtercoins }}>
      <div className={styles.main}>
        <Card addbalance={AddBlance} balance={balance} />
        <FilterBlokc setCoins={setFilters} coins={coins} />
        {coins ? <CardList coins={filtercoins} /> : <div>Loading..</div>}
      </div>
    </Context.Provider>
  );
}
