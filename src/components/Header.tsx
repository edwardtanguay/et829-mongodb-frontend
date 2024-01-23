import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/customers">Customers</NavLink>
          </li>
          <li>
            <NavLink to="/employees">Employees</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
