/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/image/gallery/logo.svg";

const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <NavLink className="navbar-brand d-inline-flex" to="/">
            <img
              className="d-inline-block"
              src={Logo}
              alt="logo"
            />
            <span className="text-1000 fs-3 fw-bold ms-2 text-gradient">
              foodwaGon
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 my-2 mt-lg-0"
            id="navbarSupportedContent"
          >
            <div className="nav-links">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/menu">
                    Menu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mx-auto pt-5 pt-lg-0 d-block d-lg-none d-xl-block">
              <p className="mb-0 fw-bold text-lg-center">
                Deliver to:{" "}
                <i className="fas fa-map-marker-alt text-warning mx-2" />
                <span className="fw-normal">Current Location </span>
                <span>Mirpur 1 Bus Stand, Dhaka</span>
              </p>
            </div>
            <form className="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
              <div className="input-group-icon pe-2">
                <i className="fas fa-search input-box-icon text-primary" />
                <input
                  className="form-control border-0 input-box bg-100"
                  type="search"
                  placeholder="Search Food"
                  aria-label="Search"
                />
              </div>
              <button
                className="btn btn-white shadow-warning text-warning"
                type="submit"
              >
                <i className="fas fa-user me-2" />
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
