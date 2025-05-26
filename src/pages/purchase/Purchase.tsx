import './purchase.css';
import ProductCard from '../../components/productcard/ProductCard';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Link } from 'react-router-dom';

const Purchase : React.FC = ({}) => { 
    const { id } = useParams<{ id: string }>();

    
   const purchase = useSelector((state: RootState) =>
    state.purchases.lastFetchedPurchases.find((purchase) => purchase.id === id)
  );


    if (purchase && purchase.products.length > 0) {
      return (
            <div className="category-container">
                <Link className='go-back-button' to={"/profile"}>
                  <p>Go back</p>
                </Link>
                <h1>Products bought in {purchase.id}</h1>
                <h2>Total amount: {purchase.totalAmount.amount.toFixed(2)} {purchase.totalAmount.currency}</h2>
                {purchase.products.map((product) => (
                  <ProductCard product={product} key={product.id} availableButton={false}/>
                ))}
            </div>
        );
      } else if (purchase && purchase.products.length === 0) {
        return (
          <div className="category-container">
            <h1>Products bought in {purchase.id}</h1>
            <h2>No products available</h2>
          </div>
        );
      } else {
        <div className="category-container">
          <h1>Non existent purchase</h1>
        </div>
      }
}

export default Purchase;