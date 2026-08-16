import Productcard from './component/Productcard';
import Header from './component/Header';
import Admin from './pages/Admin';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import ProductListPage from './pages/ProductListPage';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import {ProductsProvider} from './hooks/ProductContext'
import Footer from './component/Footer';
//The context provider is wrapped to encapsulate the entire application since it is accessed by most components
function App() {
  return (
    <>
    <ProductsProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productcard />} />

          <Route path="/admin" element={<Admin />}>
            <Route index element={<ProductListPage />} />
            <Route path="products" element={<ProductListPage />} />
            <Route path="add" element={<AddProductPage />} />
            <Route path="edit/:id" element={<EditProductPage />} />
          </Route>
        </Routes>
      <Footer/>
    </ProductsProvider>
      
    </>
  );
}

export default App;