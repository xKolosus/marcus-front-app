import { ProductSearch } from 'types';
import './category.css';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useGetFilteredProductsQuery } from '../../services/productApi';
import ProductCard from '../../components/productcard/ProductCard';
import Loader from '../../components/loader/Loader';
import Pagination from '../../components/pagination/Pagination';
import { setLastFetchedProducts } from '../../features/product/productSlice';

const CategoryComponent : React.FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(0);
  const { id } = useParams<{ id: string }>();
  const initialized = useSelector(
      (state: RootState) => state.products.initialized
  );

  const category = useSelector((state: RootState) =>
    state.categories.lastFetchedCategories.find((category) => category.id === id)
  );

  if (category) {
    const [title, setTitle] = useState(category?.name || ""); 

    useEffect(() => {
      if (category) {
        setTitle(category.name);
      }
    }, [category]);

    
      const productSearch : ProductSearch = {
        categoryId: category.id,
        page: page,
        pageSize: 8,
        order : null,
        orderBy : null,
        subCategoryId: null,
        searchBy: null
      }

    
  const { data, isLoading } = useGetFilteredProductsQuery(productSearch);

useEffect(() => {
    if (data && !initialized) {
      dispatch(setLastFetchedProducts(data));
    }
  }, [data, initialized, dispatch]);

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


   if (!category.enabled) {
    return  (
          <div className="category-container">
              <h1>{title}</h1>
              <h2>This category is disabled</h2>
          </div>
          )
   }

    if (data && data.content.length > 0) {
      const handlePageChange = (newPage: number) => {
        if (data && newPage >= 0 && newPage < data.page.totalPages) {
          setPage(newPage);
        }
      };


        return (
            <div className="category-container">
                <h1>{title}</h1>
                {data.content.map((product) => (
                  <ProductCard product={product} key={product.id} availableButton={true}/>
                ))}
            <Pagination page={data.page.pageNumber} totalPages={data.page.totalPages} onPageChange={handlePageChange}></Pagination>
            </div>
        );
      } else {
        return (
          <div className="category-container">
            <h1>{title}</h1>
            <h2>No products available</h2>
          </div>
        );
      } 
  } else {
    return (
      <div className="category-container">
          <h1>Category does not exist</h1>
        </div>
    )
  }
}

export default CategoryComponent;