import "./style.css";
import { withUABalance } from "../../helpers/hoc/withUABalance";

function Card({ balance, addbalance, uaBalance }) {
  // console.log(uaBalance);

  return (
    <div className="card">
      <div className="card__crypto">
        <div className="card__company">Crypto-finance</div>
        <button onClick={addbalance} className="card__crypto-button">
          Add money
        </button>
      </div>
      <div className="card__balance">
        <p className="card__name">Your Name</p>
        <p className="card__your-balance">{balance} $</p>
      </div>
    </div>
  );
}

export default withUABalance(Card);
