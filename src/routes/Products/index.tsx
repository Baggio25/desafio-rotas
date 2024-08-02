import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./styles.css";

export default function Products() {
  return (
    <>
      <main>
        <section>
          <div className="container">
            <header className="header-container-products">
              <nav>
                <div className="header-menu-products-items">
                  <NavLink
                    to="/products/computers"
                    className={({ isActive }) =>
                      isActive ? "header-products-active" : ""
                    }
                  >
                    Computadores
                  </NavLink>
                  <NavLink
                    to="/products/electronics"
                    className={({ isActive }) =>
                      isActive ? "header-products-active " : ""
                    }
                  >
                    Eletrônicos
                  </NavLink>
                  <NavLink
                    to="/products/books"
                    className={({ isActive }) =>
                      isActive ? "header-products-active " : ""
                    }
                  >
                    Livros
                  </NavLink>
                </div>
              </nav>
            </header>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}
