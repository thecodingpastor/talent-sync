import Navbar from "../general/Navbar";
import Left from "./Banner/Left";
import Right from "./Banner/Right";

import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <header className={classes.Container}>
      <div className={classes.Img}></div>
      <div className={classes.Mask}></div>
      <Navbar />
      <section>
        <Left />
        <Right />
      </section>
    </header>
  );
};

export default Banner;
