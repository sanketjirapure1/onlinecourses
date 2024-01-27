import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faBook} from '@fortawesome/free-solid-svg-icons';

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
            Online Courses
          </Link>

          <nav className="navbar navbar-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-1 border"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-1 my-sm-0"
                type="submit">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="mr-1"
                  style={{color: '#007bff'}}
                />
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
                  <FontAwesomeIcon
                    icon={faBook}
                    className="mr-1"
                    style={{color: '#d49533'}}
                  />
                  <span
                    style={{
                      color: '#2c46b6',
                      fontWeight: 600,
                      fontSize: 17,
                    }}>
                    Courses
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/carts"
                  className="nav-link navlinkcss"
                  onClick={toggleMenu}>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="mr-1"
                    style={{color: '#d49533'}}
                  />

                  <span
                    style={{
                      color: '#2c46b6',
                      fontWeight: 600,
                      fontSize: 17,
                    }}>
                    Cart
                  </span>
                </NavLink>
              </li>
            </ul>
            <div className="navbar-text">
              <Link to="#" className="btn btn-outline-secondary mr-2 logincss">
                Log in
              </Link>
              <Link to="#" className="btn btn-outline-secondary mr-2 sigincss">
                Sigin Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
