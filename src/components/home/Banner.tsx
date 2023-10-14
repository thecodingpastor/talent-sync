import Navbar from "../general/Navbar";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <header className={classes.Container}>
      <Navbar />
    </header>
  );
};

export default Banner;
