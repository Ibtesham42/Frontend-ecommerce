
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<HomeCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<HomeCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<HomeCategory banner={kid_banner} category="kid"/>}/>

      <Route path='/product' element={<Product/>}>
        <Route path=':productid' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      {/* {!LoginSignup() && <Footer />} */}
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
