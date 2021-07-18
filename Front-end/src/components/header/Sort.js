import "./Sort.css";

function Sort() {
  return (
    <div className="sort-section">
      <select id="sort">
        <option value="def">Sort By: New Arrivals</option>
        <option value="asc">Price: High To Low</option>
        <option value="desc">Price: Low To High</option>
        <option value="alpasc">Alphabetic: high To Low</option>
        <option value="alpdesc">Alphabetic: Low To Low</option>
      </select>
    </div>
  );
}

export default Sort;
