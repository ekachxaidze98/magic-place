import "./Header.css";
import Button from "./SelectButton";
import HelpMenu from "./HelpMenu";
import SearchInput from "./SearchInput";

function Header({
  selectedCount,
  count,
  fetchedProducts,
  setData,
  handleClearAll,
  handleSelectAll,
  setSearchValue,
}) {
  return (
    <div className="header">
      <div className="header__item">
        <Button title="SELECT ALL" />
        <span className="header__selection">{`selected ${selectedCount} out of ${count} products`}</span>
        {selectedCount > 0 ? <Button title="CLEAR ALL" /> : ""}
      </div>
      <div className="header__item">
        <SearchInput
          placeholder={"search..."}
          fetchedProducts={fetchedProducts}
          setData={setData}
          setSearchValue={setSearchValue}
        />
        <Button title="add to inventory" big />
        <HelpMenu />
        <p className="log-out">Log out</p>
      </div>
    </div>
  );
}

export default Header;
