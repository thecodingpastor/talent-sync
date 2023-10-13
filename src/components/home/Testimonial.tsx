import Shopify from "../../assets/svgs/shopify.svg";
import Star from "../../assets/svgs/filled-star.svg";
import Sarah from "../../assets/images/sarah.png";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";

import classes from "./Testimonial.module.scss";

const Testimonial = () => {
  return (
    <section className={classes.Container}>
      <div className={classes.Left}>
        <figure className={classes.Shopify}>
          <img src={Shopify} alt="Shopify Logo" />
        </figure>
        <div className={classes.Stars}>
          {Array.from({ length: 5 }, (_, index) => (
            <img key={index} src={Star} alt="Star" />
          ))}
        </div>
        <p className={classes.Text}>
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
        <div className={classes.Base}>
          <div className={classes.Manager}>
            <figure>
              <img src={Sarah} alt="Project Manager" />
            </figure>
            <div>
              <h4>Sarah Thompson</h4>
              <p>Project Manager, Spotify</p>
            </div>
          </div>
          <div className={classes.Arrows}>
            <figure>
              <img src={ArrowLeft} alt="Left Arrow" />
            </figure>
            <figure>
              <img src={ArrowRight} alt="Right Arrow" />
            </figure>
          </div>
        </div>
      </div>
      <div className={classes.Right}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum enim
        itaque dolores consequatur iusto quis ipsam. Earum maxime magni vel modi
        at, eveniet nisi dolore in natus nulla dolorem porro.
      </div>
    </section>
  );
};

export default Testimonial;
