import MoreMagic from "./AddMoreMagic";
import "./MagicPlace.css";
const magicPlace = () => {
  return (
    <div class="ag-night-sky-block">
      <div class="ag-night-sky_sky">
        <div class="ag-night-sky_palm ag-night-sky_palm-1"></div>
        <div class="ag-night-sky_palm ag-night-sky_palm-2"></div>
        <div class="ag-night-sky_stars"></div>
        <div class="ag-night-sky_twinkling"></div>
        <div class="ag-night-sky_clouds"></div>
        <div class="ag-night-sky_moon"></div>
      </div>
      <div class="ag-format-container"></div>
      <MoreMagic />
    </div>
  );
};

export default magicPlace;
