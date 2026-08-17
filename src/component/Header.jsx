import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';
import '../styles/header.css';

export default function Header() {
  const { role } = useAuth();
  const isAdmin = role === 'admin';

  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        <NavLink to={isAdmin ? '/admin' : '/contact'} className="nav-link">
          {isAdmin ? 'Admin' : 'Contact'}
        </NavLink>
      </nav>
    </header>
  );
}