import { Category } from "types";
import "./home.css";
import Carousel from "../../components/carrousel/Carrousel";
import CardsInfo from "../../components/cardinfo/CardsInfo";

const Home : React.FC = () => {


const categories : Category[] = [{
  id : "1",
  name : "Bikes",
  enabled : true,
  subCategories : [{
    id : "1", description : "bbb", categoryId : "123123"
}]
},
{
  id : "2",
  name : "Skate",
  enabled : false,
  subCategories : [{
    id : "2", description : "bbb", categoryId : "123123"
}]
},
{
  id : "3",
  name : "Surf",
  enabled : false,
  subCategories : [{
    id : "3", description : "bbb", categoryId : "123123"
}]
}
]

  return (
    <div className="main-container">
      <Carousel infinite width="75%" height="500px" categories={categories}/>
      <h2>Welcome to the Marcus sport shop!</h2>
      <CardsInfo/>
    </div>
  )
}
export default Home
