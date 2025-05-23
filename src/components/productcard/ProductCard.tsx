import { Product } from "types";

import "./productcard.css";
import { Link } from "react-router-dom";

interface ProductProp {
    product : Product;
}

const ProductCard : React.FC<ProductProp> = ({ product }) => {

    return (
        <div className="product-card">
        <Link to={`/product/${product.id}`}>
        <img src={ 
                product.photoUrl != null
                ? product.photoUrl : '../public/Nocontent.jpg'
            }
            alt="Product Image"
            className="product-image"/>
        </Link>
        <div className="product-content">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">
                {product.description}
            </p>
            <div className="button-price-container">
                <button className="buy-button">Add to cart</button>
                <span className="product-price">{product.price.amount.toString()} {product.price.currency}</span>
            </div>
        </div>
    </div>
    );
}

export default ProductCard;