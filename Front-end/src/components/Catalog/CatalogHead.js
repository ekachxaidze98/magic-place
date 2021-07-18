import "./CatalogHead.css";
import Checkbox from "./Checkbox";
import Button from "../header/SelectButton";
import { useSelector } from "react-redux";

const CatalogHead = ({
  catalogSelected,
  handleCatalogSelect,
  item,
  showDelete,
  handleAddToCart,
  handleDeleteFromCart,
  checked,
}) => {
  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );

  return (
    <div
      className={`catalog__head 
        ${selectedProducts.includes(item.id) ? "catalog__head--active" : ""}`}
    >
      <Checkbox checked={checked} handleCheckboxChange={handleCatalogSelect} />

      <Button handleClick={handleAddToCart} title="add to inventory" />
    </div>
  );
};
export default CatalogHead;
