import { NavLink } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={css.notFoundTitle}>404</h1>
      <div>
        <p className={css.notFoundText}>Oops page not found...</p>
      <div className={css.notFoundLink}>
        <NavLink className={css.notFoundLinkItem} to="/">Back to home page. </NavLink>
      </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
