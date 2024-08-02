import { NavLink } from "react-router-dom";

import homeImg from "../../assets/images/Vector.svg";

import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <nav className="container">
        <div className="header-menu">
          <div className="header-menu-items">
            <NavLink to="/home" className={({ isActive }) => isActive ? "header-active" : ""}>Início</NavLink>
            <NavLink to="/products/computers" className={({ isActive }) => isActive ? "header-active" : ""}>Produtos</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "header-active" : ""}>Sobre Nós</NavLink>
          </div>
          <div className="header-menu-right">
            <Link to="/home">
              <img src={homeImg} alt="home" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
