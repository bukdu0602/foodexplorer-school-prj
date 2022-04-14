import lamb1 from "./images/lamb-tb.jpg";
import breakfast2 from "./images/breakfast-tb.jpg";
import calamari3 from "./images/calamari-tb.jpg";
import steak4 from "./images/steak-tb.jpg";

function RecipeCuisine() {
  return (
    <div className="recipeCuisine">
      <div className="recipewrapper">
        <h3>LATEST RECIPES</h3>
        <div className="recipeList">
          <img src={lamb1} alt="Lamb" />
          <p>MET CONSEC TETUR ELIT</p>
        </div>
        <div className="recipeList">
          <img src={breakfast2} alt="breakfast" />
          <p>ARCHI TECTO DOLORES</p>
        </div>
        <div className="recipeList">
          <img src={calamari3} alt="calamari" />
          <p>MEXPE DITA CIATIS</p>
        </div>
        <div className="recipeList">
          <img src={steak4} alt="steak" />
          <p>FUGIAT EAQUE AORE</p>
        </div>
      </div>
      <h3>CUISINES</h3>
      <div className="cusineWrapper">
        <div>
          <a href="/">American (95)</a>
          <a href="/">Asian (33)</a>
          <a href="/">cambodian (3)</a>
          <a href="/">Chinese (281)</a>
          <a href="/">Filipino (8)</a>
          <a href="/">French (40)</a>
          <a href="/">German (7)</a>
          <a href="/">Greek (29)</a>
          <a href="/">Indian (44)</a>
          <a href="/">Italian (60)</a>
          <a href="/">Jamaican (7)</a>
          <a href="/">Japanese (202)</a>
          <a href="/">Korean (120)</a>
          <a href="/">Malaysian (12)</a>
          <a href="/">Mediterranean (9)</a>
          <a href="/">Mexican (25)</a>
          <a href="/">Southern (14)</a>
        </div>
      </div>
    </div>
  );
}

export default RecipeCuisine;
