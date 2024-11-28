import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/frontend/home/Home';
import Clothes from './components/pages/backend/clothes/Clothes';
import { StoreProvider } from './components/pages/backend/store/storeContext';
import Category from './components/pages/backend/category/Category';
import Dashboard from './components/pages/backend/dashboard/Dashboard';
import Login from './components/pages/backend/access/Login';
import SetPassword from './components/pages/backend/access/SetPassword';
import ForgotPassword from './components/pages/backend/access/ForgotPassword';
import ProductInfo from './components/pages/frontend/product-info/ProductInfo';


const App = () => {
  return (
    <StoreProvider>
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/product/:slug" index element={<ProductInfo/>}/>
        <Route path="/admin/dashboard" index element={<Dashboard/>}/>
        <Route path="/admin/clothes" index element={<Clothes/>}/>
        <Route path="/admin/category" index element={<Category/>}/>
        <Route path="/admin/login" index element={<Login/>}/>
       <Route path="/admin/setpassword" index element={<SetPassword/>}/>
       <Route path="/admin/forgotpassword" index element={<ForgotPassword/>}/>
      </Routes>
    </Router>
    </StoreProvider>

  );
};

export default App
