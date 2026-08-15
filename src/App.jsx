//This is where the routing will be defined. Use of react router is adviced.
//I have installed react router and material UI for UI elements and components to the repository
//To avoid merge conflicts, do not edit this page. Leave it for the scrum master.
//I have a sample DB with products run with npm run server

import Productcard from './component/Productcard';
import Admin from './pages/Admin';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import ProductListPage from './pages/ProductListPage';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;