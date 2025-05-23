import "./home.css";
import Carousel from "../../components/carrousel/Carrousel";
import CardsInfo from "../../components/card/CardsInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "store";
import { useGetCategoriesQuery } from "../../services/categoryApi";
import { useEffect } from "react";
import { setLastFetchedCategories } from "../../features/category/categorySlice";

const Home : React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories.lastFetchedCategories);
  const initialized = useSelector(
      (state: RootState) => state.categories.initialized
  );

  const { data, error, isLoading } = useGetCategoriesQuery(undefined, {
    skip: initialized,
  });

  useEffect(() => {
    if (data && !initialized) {
      dispatch(setLastFetchedCategories(data));
    }
  }, [data, initialized, dispatch]);


  return (
    <div className="main-container">
      <Carousel infinite width="75%" height="500px" categories={categories}/>
      <h2>Welcome to the Marcus sport shop!</h2>
      <CardsInfo/>
    </div>
  )
}
export default Home
