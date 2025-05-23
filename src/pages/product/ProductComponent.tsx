import React, { useEffect, useState } from "react";
import "./product.css";
import { Link, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../services/productApi";
import Loader from "../../components/loader/Loader";

const ProductComponent: React.FC = ({}) => {

  const { id } = useParams<{ id: string }>();

  if (id) {
    const productId = id;
    const { data, isLoading } = useGetProductQuery(productId);
    const product = data;

    
      const [minLoading, setMinLoading] = useState(true);
      useEffect(() => {
                    if (!isLoading) {
                        const timer = setTimeout(() => {
                            setMinLoading(false);
                        }, 350);
                        return () => clearTimeout(timer);
                    }
                }, [isLoading]);
    
      if (isLoading || minLoading) {
          return <Loader />;
      }

      if (product) { 
      return (
            <div className="container">
              <Link to={`/category/${product.subCategory.categoryId}`} className="back-link">← Back to category</Link>
              <div className="product-detail">
                <div className="product-detail-image">
                  <img src={ 
                    product.photoUrl != null
                    ? product.photoUrl : '../public/Nocontent.jpg'
                    }
                alt="Product Image" />
                </div>
                <div className="product-info">
                  <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <div className="price">{product.price.amount.toString()} {product.price.currency}</div>
                    <div className="availability">
                      Availability: {product.stock >0 ? 
                        <span className="availability-true">In stock</span> : 
                        <span className="availability-false">Not available</span>
                        }
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="add-to-wishlist">Add to Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
      )
      } else {
        return (
          <h1>No product found</h1>
        )
      }

  }

}

export default ProductComponent;
