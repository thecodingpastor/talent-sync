import TalkingPoints from "./TalkingPoints";

import Arrow from "../../../assets/svgs/arrow.svg";
import People from "../../../assets/images/people.webp";

import classes from "./WhyChoose.module.scss";

const WhyChoose = () => {
  return (
    <section className={classes.Container}>
      <div className={classes.Top}>
        <h3>The ClearLink Advantage</h3>
        <h2>Why choose ClearLink?</h2>
        <p>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Left}>
          <TalkingPoints />
        </div>
        <div className={classes.Right}>
          <figure>
            <img src={Arrow} alt="Arrow" className={classes.Arrow} />
          </figure>
          <figure className={classes.People}>
            <img src={People} alt="People" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
