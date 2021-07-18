import React, { useState } from "react";
import "./Range.css";

import Slider from "@material-ui/core/Slider";

const Range = () => {
  const [value, setValue] = useState([0, 15000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <>
      <div className="choose__item-slider">
        <Slider
          style={{ width: "80%" }}
          value={value}
          onChange={handleChange}
          color="secondary"
          min={0}
          max={15000}
        />
      </div>
      <div className="range-values">
        <div className="range-values__item">
          <div className="value__item value__item--currency">$</div>
          <div className="value__item value__item--price">{value[0]}</div>
        </div>
        <div className="range-values__item">
          <div className="value__item value__item--currency">$</div>
          <div className="value__item value__item--price">{value[1]}</div>
        </div>
      </div>
    </>
  );
};

export default Range;
