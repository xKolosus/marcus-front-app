import { Product } from "types";

import "./productcard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface ProductProp {
    product : Product;
    availableButton: boolean;
}

const ProductCard : React.FC<ProductProp> = ({ product, availableButton }) => {

    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
        );


    return (
        <div className="product-card">
        <Link to={`/product/${product.id}`}>
        <img src={ 
                product.photoUrl != null
                ? product.photoUrl : '../Nocontent.jpg'
            }
            alt="Product Image"
            className="product-image"/>
        </Link>
        <div className="product-content">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">
                {product.description}
            </p>
            {
                availableButton ? (
                    <div className="button-price-container">
                        <button className={`buy-button ${!isAuthenticated ? 'buy-button-disabled' : ''}`}>Add to cart</button>
                        <span className="product-price">{product.price.amount.toString()} {product.price.currency}</span>
                    </div>
                ) : (
                    <div className="button-price-container">
                        <span className="product-price">{product.price.amount.toString()} {product.price.currency}</span>
                    </div>
                )
            }
            
        </div>
    </div>
    );
}

export default ProductCard;