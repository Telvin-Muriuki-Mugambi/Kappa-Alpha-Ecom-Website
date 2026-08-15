import { NavLink } from 'react-router-dom';
import './style/header.css';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        <NavLink to="/admin" className="nav-link">Admin</NavLink>
      </nav>
    </header>
  );
}