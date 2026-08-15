import { NavLink, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div className="admin-layout">
      <h1>Admin</h1>

      <nav className="admin-nav">
        <NavLink to="/admin">Products</NavLink>
        <NavLink to="/admin/add">Add Product</NavLink>
        <NavLink to="/admin/edit/1">Edit Product</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Admin;