import SearchIcon from "@material-ui/icons/Search";

import "./SearchInput.css";

const SearchInput = ({
  fetchedProducts,
  setData,
  placeholder,
  setSearchValue,
}) => {
  return (
    <form className="header__form">
      <input
        id="searchQuery"
        className="header__input"
        type="text"
        placeholder={placeholder}
      />
      <button id="searchButton" className="header__searchbtn" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};
export default SearchInput;
