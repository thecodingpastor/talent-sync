import Shopify from "../../assets/svgs/shopify.svg";
import Star from "../../assets/svgs/filled-star.svg";

import classes from "./Testimonial.module.scss";

const Testimonial = () => {
  return (
    <section className={classes.Container}>
      <div className={classes.Left}>
        <figure>
          <img src={Shopify} alt="Shopify Logo" />
        </figure>
        <div className={classes.Stars}>
          {Array.from({ length: 5 }, (_, index) => (
            <img key={index} src={Star} alt="Star" />
          ))}
        </div>
        <p>
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
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
