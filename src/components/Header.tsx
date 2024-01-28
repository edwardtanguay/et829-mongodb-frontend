import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const Header = () => {
  const [navDisplay, setNavDisplay] = useState(false);
  const handleBurgerClick = () => setNavDisplay(!navDisplay);

  useEffect(() => {
    setNavDisplay(window.innerWidth >= 768);
  }, []);

  return (
    <header>
      <h2>Library</h2>
      <nav className={`display--${navDisplay}`}>
        <ul>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/authors">Authors</NavLink>
          </li>
        </ul>
      </nav>
      <div className="burger-menu" onClick={handleBurgerClick}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </header>
  );
};
