import Productcard from './component/Productcard';
import Header from './component/Header';
import Admin from './pages/Admin';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import ProductListPage from './pages/ProductListPage';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import {ProductsProvider} from './hooks/ProductContext'
//The context provider is wrapped on top of header and route component
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
    </ProductsProvider>
      
    </>
  );
}

export default App;