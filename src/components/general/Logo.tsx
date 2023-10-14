import LogoIcon from "../../assets/svgs/logo.svg";

import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.Container}>
      <figure>
        <img src={LogoIcon} alt="Clear Link Logo" />
      </figure>
      <h1>ClearLink.</h1>
    </div>
  );
};

export default Logo;
