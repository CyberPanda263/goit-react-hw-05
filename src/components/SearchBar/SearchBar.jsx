import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, filterValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    onSubmit(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="search"
          type="search"
          placeholder="Search"
          defaultValue={filterValue}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
