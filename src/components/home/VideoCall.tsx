import Check from "../../assets/icons/check-circle.svg";
import Call from "../../assets/images/call.webp";
import ActionButton from "../general/ActionButton";

import classes from "./VideoCall.module.scss";

const list = [
  "30 days free trial",
  "Cancel at any time",
  "Access to all features",
  "Peronalized onboarding",
];
const VideoCall = () => {
  return (
    <section className={classes.Container}>
      <div className={classes.Left}>
        <h3>Ready to clear the path to perfect communication?</h3>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <figure>
                <img src={Check} alt="Check" />
              </figure>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className={classes.Btns}>
          <ActionButton>Talk to sales</ActionButton>
          <ActionButton color="blue">Start your free trial</ActionButton>
        </div>
      </div>
      <figure className={classes.Right}>
        <img src={Call} alt="Call" />
      </figure>
    </section>
  );
};

export default VideoCall;
