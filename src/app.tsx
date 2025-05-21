import Home  from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/login/Login';
import Header from './components/header/Header';
import './app.css';


const AppRoutes = () => {
  return (
        <Router>
          <Header/>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="login" element={<Login/>}/>
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
