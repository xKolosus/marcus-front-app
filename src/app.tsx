import Home  from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/login/Login';
import Header from './components/header/Header';
import './app.css';
import CategoryComponent from './pages/category/CategoryComponent';
import ProductComponent from './pages/product/ProductsPerCategory';
import AboutUs from './pages/aboutus/AboutUs';
import ContactUs from './pages/contactus/ContactUs';
import Products from './pages/product/Products';
import Register from './pages/register/Register';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile/Profile';
import Purchase from './pages/purchase/Purchase';


const AppRoutes = () => {
  return (
        <Router>
          <Header/>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="product" element={<Products/>}/>
              <Route path="category/:id" element={<CategoryComponent/>}/>
              <Route path="product/:id" element={<ProductComponent/>}/>
              <Route path="about" element={<AboutUs/>}/>
              <Route path="contact" element={<ContactUs/>}/>

              <Route element={<PrivateRoute />}>
                <Route path="profile" element={<Profile />} />
                <Route path="purchase/:id" element={<Purchase/>}/>
              </Route>
            </Routes>
        </Router>
      )
}

const App : React.FC = () =>  {
  return (
    <AppRoutes/>
  )
}

export default App
