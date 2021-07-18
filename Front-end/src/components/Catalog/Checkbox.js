import "./Checkbox.css";

const Checkbox = ({ checked, handleCheckboxChange }) => {
  return (
    <label className="catalog__checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        value={checked}
        onChange={handleCheckboxChange}
      />
      <span className="catalog__checkmark" />
    </label>
  );
};

export default Checkbox;
