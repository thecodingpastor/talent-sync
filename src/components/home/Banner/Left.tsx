import Bot from "../../../assets/icons/bot.svg";

import ActionButton from "../../general/ActionButton";
import FiveStars from "../FiveStars";
import Avatars from "./Avatars";

import classes from "./Left.module.scss";

const Left = () => {
  return (
    <div className={classes.Container}>
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
      <div className={classes.Two}>
        <Avatars />
        <div>
          <div className={classes.In}>
            <FiveStars /> <span>5.0</span>
          </div>
          <p>from 3,000+ reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Left;
