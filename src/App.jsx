import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/home/Home";
import Clothes from "./components/pages/backend/clothes/Clothes";
import Category from "./components/pages/backend/category/Category";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import Login from "./components/pages/backend/access/Login";
import SetPassword from "./components/pages/backend/access/SetPassword";
import ForgotPassword from "./components/pages/backend/access/ForgotPassword";
import ProductInfo from "./components/pages/frontend/product-info/ProductInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./components/store/storeContext";
import Banner from "./components/pages/backend/banner/Banner";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product/:slug" index element={<ProductInfo />} />
            <Route path="/admin/dashboard" index element={<Dashboard />} />
            <Route path="/admin/clothes" index element={<Clothes />} />
            <Route path="/admin/category" index element={<Category />} />
            <Route path="/admin/banner" index element={<Banner />} />
            <Route path="/admin/login" index element={<Login />} />
            <Route path="/admin/setpassword" index element={<SetPassword />} />
            <Route
              path="/admin/forgotpassword"
              index
              element={<ForgotPassword />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
