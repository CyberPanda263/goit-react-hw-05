import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink className={buildLinkClass} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
