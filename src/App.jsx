import Productcard from './component/Productcard';
import Header from './component/Header';
import Admin from './pages/Admin';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import ProductListPage from './pages/ProductListPage';
import Home from './component/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ProductsProvider } from './hooks/ProductContext';
import { CartProvider } from './hooks/CartContext';
import Footer from './component/Footer';

import { AuthProvider, useAuth } from './hooks/AuthProvider';
import Login from './component/Login';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

function AppRoutes() {
  const location = useLocation();
  const { role } = useAuth();

  const showLayout = location.pathname !== '/';
  const isAdmin = role === 'admin';


//The context provider is wrapped to encapsulate the entire application since it is accessed by most components

  return (
    <>
      {showLayout && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Productcard />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/admin"
          element={isAdmin ? <Admin /> : <Contact />}
        >
          <Route index element={<ProductListPage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="add" element={<AddProductPage />} />
          <Route path="edit/:id" element={<EditProductPage />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <AppRoutes />
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;