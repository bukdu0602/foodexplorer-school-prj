import { useState } from "react";
import smallLogo from "./images/small-logo.jpg";
import logo from "./images/logo.png";
import menu from "./images/menu.png";
import searchImg from "./images/search.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <div className="header">
      <div id="navMobile">
        <div className="menuClosed">
          <a href="/">
            <img className="sLogo" src={smallLogo} alt="Small Logo" />
            <img className="lLogo" src={logo} alt="logo" />
          </a>
          <img src={menu} alt="menu" onClick={() => setMenuClick(!menuClick)} />
        </div>
        {menuClick && (
          <div className="menuExtend">
            <div className="searchInput">
              <input type="text" placeholder="Search" />
              <div className="searchImgDiv">
                <img src={searchImg} alt="search Img" />
              </div>
            </div>
            <div>
              <h3>Home</h3>
              <h3>About</h3>
              <h3>Reviews</h3>
              <h3>Receipes</h3>
              <h3>Contact</h3>
            </div>
            <div className="socialMedia">
              <div className="test2">
                <div className="fb"></div>
                <div className="gg"></div>
                <div className="tt"></div>
              </div>
              <a href="/">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="ftIcon1"
                ></FontAwesomeIcon>
              </a>

              <a href="/">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="ftIcon"
                ></FontAwesomeIcon>
              </a>
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="ftIcon"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        )}
      </div>
      <div id="navDesktop">
        <div className="menuDesktop">
          <a href="/">
            <img className="lLogo" src={logo} alt="logo" />
          </a>
          <div className="searchInput">
            <input type="text" placeholder="Search" />
            <div className="searchImgDiv">
              <img src={searchImg} alt="search Img" />
            </div>
          </div>
          <div className="socialMedia">
            <a href="/">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="ftIcon"
              ></FontAwesomeIcon>
            </a>
            <a href="/">
              <FontAwesomeIcon
                icon={faGoogle}
                className="ftIcon"
              ></FontAwesomeIcon>
            </a>
            <a href="/">
              <FontAwesomeIcon
                icon={faTwitter}
                className="ftIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>

        <div className="menuExtend">
          <div>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Reviews</h3>
            <h3>Receipes</h3>
            <h3>Contact</h3>
            <div className="searchInput2">
              <input type="text" placeholder="Search" />
              <div className="searchImgDiv">
                <img src={searchImg} alt="search Img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
