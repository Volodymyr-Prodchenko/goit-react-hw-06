import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="search"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
