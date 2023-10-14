import ChevronDown from "../../assets/icons/chevron-down.svg";
import Logo from "../../assets/svgs/logo.svg";
import ActionButton from "./ActionButton";
import Hamburger from "./Hamburger";

import classes from "./Navbar.module.scss";

const list = [
  { title: "Products", hasChild: true },
  { title: "Solutions", hasChild: true },
  { title: "Resources", hasChild: true },
  { title: "Pricing", hasChild: false },
];

const Navbar = () => {
  return (
    <nav className={classes.Container}>
      <div className={classes.Inner}>
        <div className={classes.Logo}>
          <figure>
            <img src={Logo} alt="Clear Link Logo" />
          </figure>
          <h1>ClearLink.</h1>
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.title}>
              {item.title}{" "}
              {item.hasChild && (
                <figure>
                  <img src={ChevronDown} alt="Chevron" />
                </figure>
              )}
            </li>
          ))}
        </ul>
        <Hamburger />
        <div className={classes.Btn}>
          <ActionButton className={classes.Btn}>Talk to sales</ActionButton>
          <ActionButton className={classes.Btn} color="blue">
            Sign up for free
          </ActionButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
