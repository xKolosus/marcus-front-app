import './product.css';
import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../../services/productApi';
import ProductCard from '../../components/productcard/ProductCard';
import Loader from '../../components/loader/Loader';

const Products : React.FC = ({}) => {  
  const { data, isLoading } = useGetProductsQuery();


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
     

    if (data && data.length > 0) {
      return (
            <div className="category-container">
                <h1>All products</h1>
                {data.map((product) => (
                  <ProductCard product={product} key={product.id} availableButton={true}/>
                ))}
            </div>
        );
      } else {
        return (
          <div className="category-container">
            <h1>Products</h1>
            <h2>No products available</h2>
          </div>
        );
      } 
}

export default Products;