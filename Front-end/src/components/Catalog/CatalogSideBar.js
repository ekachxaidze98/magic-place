// import { Select } from "../select/select";
import "./CatalogSideBar.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Range from "./Range";
import Button from "../header/SelectButton";
import { useState } from "react";

const CatSidebar = (props) => {
  const [reset, setReset] = useState(false);

  const resetFunc = (e) => {
    e.preventDefault();
    setReset(!reset);
  };

  return (
    <section className="aside__item">
      <div className="choose__item choose__item--top">
        <span>Choose Niche</span> <i className="fas fa-angle-down"></i>
      </div>
      <div className="choose__item choose__item--bottom">
        <span>Choose Niche</span> <i className="fas fa-angle-down"></i>
      </div>
      <div className="choose__options-wrapper">
        <div className="choose__options">
          Ship From
          <KeyboardArrowDownIcon />
        </div>
        <div className="choose__options">
          Ship To
          <KeyboardArrowDownIcon />
        </div>
        <div className="choose__options">
          select Supplier
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="range__slider">
        <Range name="Price Range" type="$" min={1} max={1000} reset={reset} />
        <Range name="Pofit Range" type="%" min={1} max={98} reset={reset} />

        <Button
          visible
          width="100%"
          fontSize="15px"
          height="40px"
          margin="35px 0 0 0"
          onClick={resetFunc}
        >
          Reset Filter
        </Button>
        {/* <Range title="Price Range" id="priceRange" /> */}
      </div>
    </section>
  );
};

export default CatSidebar;
