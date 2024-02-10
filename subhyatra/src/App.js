import React, { useState, useEffect, createContext } from 'react';
import './components/style.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Contact from './components/HelpContact';
import Home from './components/Home';
import PageCategory from './components/Pages/Category';
import VisitPage from './components/Pages/VisitPage';
import Wishlist from './components/Pages/Wishlist';
import CreateProdcut from './components/Pages/CreateProduct'
import ComingSoon from './components/Pages/comingsoon';
import UpdateProfile from './components/updateProfile';
import Forgetpassword from './components/Forgetpassword';
import Reset_password from './components/reset-password';
import Privatecomponent from './components/PrivateComponent';
import VerifyOTP from './components/VerifyOTP';
export const ProductsContext = createContext();
const BASE_URL = process.env.REACT_APP_API_URL



function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const UserContext = React.createContext('user');

  const updateUser = (userData) => {
    setUser(userData);
  };
  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
  }, [products]);

  const getProducts = async () => {
    try {
      let result = await fetch(`${BASE_URL}/products`);
      result = await result.json();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <UserContext.Provider value={user}>
          <ProductsContext.Provider value={{ products, setProducts }}>
            <Routes>
              <Route path='/' element={<Privatecomponent />} >
                <Route path='/' element={<Home />} />
                <Route path='/profile/:id' element={<Profile updateUser={updateUser} />} />
                <Route path='/Help' element={<Contact />} />
                <Route path='/nature' element={< PageCategory />} />
                <Route path='/culture' element={<PageCategory />} />
                <Route path='/food' element={<PageCategory />} />
                <Route path='/activities' element={<PageCategory />} />
                <Route path='/visitpage' element={<VisitPage />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/CraeteProduct' element={<CreateProdcut />} />
                <Route path='/comingup' element={<ComingSoon />} />
                <Route path='/updateProfile' element={<UpdateProfile />} />
              </Route>
              <Route path='/Forgetpassword' element={<Forgetpassword />} />
              <Route path='/reset-password/:id/:token' element={<Reset_password />} />
              <Route path='/signup' element={<Signup updateUser={updateUser} />} />
              <Route path='/VerifyAccount' element={<VerifyOTP updateUser={updateUser} />} />
              <Route path='/login' element={<Login updateUser={updateUser} />} />
            </Routes>
          </ProductsContext.Provider>
        </UserContext.Provider>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
