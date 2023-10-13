import Shopify from "../../assets/svgs/shopify.svg";
import Coinbase from "../../assets/svgs/coinbase.svg";
import Dropbox from "../../assets/svgs/dropbox.svg";
import Intercom from "../../assets/svgs/intercom.svg";
import Marvel from "../../assets/svgs/marvel.svg";
import Automattic from "../../assets/svgs/automattic.svg";

import classes from "./SocialProof.module.scss";

const images = [
  {
    name: "Shopify",
    src: Shopify,
  },
  {
    name: "Coinbase",
    src: Coinbase,
  },
  {
    name: "Dropbox",
    src: Dropbox,
  },
  {
    name: "Intercom",
    src: Intercom,
  },
  {
    name: "Marvel",
    src: Marvel,
  },
  {
    name: "Automattic",
    src: Automattic,
  },
];

const SocialProof = () => {
  return (
    <section className={classes.Container}>
      <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className={classes.Companies}>
        {images.map((img, i) => (
          <figure key={i}>
            <img src={img.src} alt={img.name} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
