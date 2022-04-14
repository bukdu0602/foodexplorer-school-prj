import mussel from "./images/mussel.jpg";
import musselSmall from "./images/mussel-small.jpg";
import salad from "./images/salad.jpg";
import pancake from "./images/pancake.jpg";

function TopMain() {
  return (
    <div className="topMain">
      <div className="foodPicDivs">
        <picture>
          <source media="(min-width: 500px)" srcSet={mussel} />
          <img src={musselSmall} alt="mussel small" />
        </picture>

        <div className="foodCaption">
          <p>LOREM IPSUM DOLOR SIT</p>
        </div>
      </div>
      <div>
        <div id="flexPics">
          <div className="foodPicDivs ratioChangePics">
            <img src={salad} alt="Salad" />
            <div className="foodCaption">
              <p>LOREM, IPSUM DOLOR</p>
            </div>
          </div>
          <div className="foodPicDivs ratioChangePics">
            <img src={pancake} alt="Pancake" />
            <div className="foodCaption">
              <p>SIT AMET CONSECTETUR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMain;
