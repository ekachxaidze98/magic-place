import "./CatalogHead.css";
import Checkbox from "./Checkbox";
import Button from "../header/SelectButton";

const CatalogHead = ({
  catalogSelected,
  handleCatalogSelect,
  item,
  showDelete,
  handleAddToCart,
  handleDeleteFromCart,
  checked,
}) => {
  // const classes = useStyles();
  // const selectedProducts = useSelector(
  //   (state) => state.product.selectedProducts
  // );

  return (
    <div
      className="catalog__head"
      // className={`catalog__head
      //   ${selectedProducts.includes(item.id) ? "catalog__head--active" : ""}`}
    >
      <Checkbox checked={checked} handleCheckboxChange={handleCatalogSelect} />
      <div>
        <Button handleClick={handleAddToCart} title="add to inventory" />
      </div>
    </div>
  );
};

export default CatalogHead;
