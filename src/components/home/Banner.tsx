import Bot from "../../assets/icons/bot.svg";

import ActionButton from "../general/ActionButton";
import Navbar from "../general/Navbar";

import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <header className={classes.Container}>
      <Navbar />
      <section>
        <div className={classes.Left}>
          <h2>
            Uniting the world,
            <br /> one video call at a time
          </h2>
          <p>
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <div className={classes.One}>
            <ActionButton color="blue" className={classes.Btn}>
              Start your free trial
            </ActionButton>
            <div>
              <figure>
                <img src={Bot} alt="Bot" />
              </figure>
              <h5>Discover AI Assistant</h5>
            </div>
          </div>
          <div className={classes.Two}></div>
        </div>
        <div className={classes.Right}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          cupiditate nemo numquam minima cumque, alias expedita! Ipsum eligendi
          vero possimus assumenda ratione culpa quasi hic, fugit dolore
          inventore aut accusantium?
        </div>
      </section>
    </header>
  );
};

export default Banner;
