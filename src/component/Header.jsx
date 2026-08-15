import { NavLink } from 'react-router-dom';

export default function Header () {
    return(
        <>
        <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/products">Products</NavLink>
           <NavLink to="/admin">Admin</NavLink>
           

        </nav>
            
        </>
    )
}