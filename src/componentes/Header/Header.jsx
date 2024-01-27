import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand navlogcss">
            OnlineCourses
          </Link>

          <nav className="navbar navbar-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-1 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </nav>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/courses"
                  className="nav-link navlinkcss"
                  onClick={toggleMenu}>
                  Courses
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/carts"
                  className="nav-link navlinkcss"
                  onClick={toggleMenu}>
                  Cart
                </NavLink>
              </li>
            </ul>
            <div className="navbar-text">
              <Link to="#" className="btn btn-outline-secondary mr-2">
                Log in
              </Link>
              <Link to="#" className="btn btn-outline-secondary mr-2">
                Sigin Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
