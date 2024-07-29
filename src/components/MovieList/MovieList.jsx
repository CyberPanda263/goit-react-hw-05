import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li className={css.item} key={movie.id}>
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={location}
            >
              {" "}
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
