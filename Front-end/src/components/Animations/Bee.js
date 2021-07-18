import "./Bee.scss";

const Bee = () => {
  return (
    <div class="bee">
      <div class="bee__body">
        <div class="bee__circle bee__circle--black"></div>
        <div class="bee__circle bee__circle--yellow helper__shift--right-1"></div>
        <div class="bee__circle bee__circle--black helper__shift--right-2"></div>
        <div class="bee__circle bee__circle--yellow helper__shift--right-3"></div>
        <div class="bee__circle bee__circle--black helper__shift--right-4 bee__face">
          <div class="bee__eyes">
            <span class="bee__eye"></span>
            <span class="bee__eye"></span>
          </div>
          <div class="bee__antennas">
            <span class="bee__antenna bee__antenna--left"></span>
            <span class="bee__antenna bee__antenna--right"></span>
          </div>
        </div>
        <div class="bee__wings">
          <span class="bee__wing bee__wing--left"></span>
          <span class="bee__wing bee__wing--right"></span>
        </div>
      </div>
    </div>
  );
};

export default Bee;
