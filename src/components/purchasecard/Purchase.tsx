import { Link } from "react-router-dom";
import { Purchase } from "../../types";
import "./purchase.css";

interface PurchaseProp {
  purchase : Purchase
}

const PurchaseComponent: React.FC<PurchaseProp> = ({purchase}) => {


  return (
    <div className="product-card">
        <div className="product-content">
            <h2 className="product-title">Purchase {purchase.id}</h2>
            <p className="product-description">
                {purchase.totalAmount.amount.toFixed(2)} {purchase.totalAmount.currency}
            </p>
            <div className="button-price-container">
                <Link to={'/purchase/' + purchase.id}>
                  <button className="buy-button">Go to detail</button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default PurchaseComponent;
