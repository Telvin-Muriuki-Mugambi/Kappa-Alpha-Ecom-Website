import { NavLink, Outlet } from 'react-router-dom';
import '../styles/mainpage.css';

function Admin() {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <nav className="admin-nav" aria-label="Admin navigation">
          <NavLink to="/admin" className="admin-link">Products</NavLink>
          <NavLink to="/admin/add" className="admin-link">Add Product</NavLink>
          <NavLink to="/admin/edit/1" className="admin-link">Edit Product</NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default Admin;