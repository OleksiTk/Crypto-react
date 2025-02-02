import { useContext } from "react";
import { Context } from "../context/Context"; // Імпортуємо Context з правильного шляху
import "./style.css";

export default function CardList() {
  const { filtercoins } = useContext(Context); // Використовуємо Context

  return (
    <ul className="cardlist">
      {filtercoins.map((item) => (
        <li className="cardlist__list" key={item.uuid}>
          <div className="cardlist__item">
            <div className="cardlist__infrom">
              <img width="50" height="50" src={item.iconUrl} alt={item.name} />
              <p style={{ color: item.color }}>{item.name}</p>
            </div>
            <p style={{ color: item.color }}>{(+item.price).toFixed(2)} USD</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
