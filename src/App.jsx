//This is where the routing will be defined. Use of react router is adviced.
//I have installed react router and material UI for UI elements and components to the repository
//To avoid merge conflicts, do not edit this page. Leave it for the scrum master.
//I have a sample DB with products run with npm run server
<<<<<<< HEAD
import Productcard from "./component/Productcard"
=======
import './styles/admin.css';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import ProductListPage from './pages/ProductListPage';
>>>>>>> 5e77c63 (feat: add admin page, supercar background, and product hooks)

function App() {

  return (
    <>
<<<<<<< HEAD
    
      <Productcard />
=======
      <AddProductPage />
      <EditProductPage />
      <ProductListPage />
>>>>>>> 5e77c63 (feat: add admin page, supercar background, and product hooks)
    </>
  )
}

export default App