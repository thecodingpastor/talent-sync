import classes from "./Footer.module.scss";

import LinkedIn from "../../assets/icons/linkedin.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/insta.svg";
import Github from "../../assets/icons/github.svg";
import Youtube from "../../assets/icons/youtube.svg";

const socials = [
  { icon: LinkedIn, name: "Linked In" },
  { icon: Twitter, name: "Twitter" },
  { icon: Facebook, name: "Facebook" },
  { icon: Instagram, name: "Instagram" },
  { icon: Github, name: "Github" },
  { icon: Youtube, name: "Github" },
];

const Footer = () => {
  return (
    <footer className={classes.Container}>
      <span>
        &copy; {new Date().getFullYear()} Clearlink. All rights reserved.
      </span>
      <div>
        {socials.map((icon, index) => (
          <figure key={index}>
            <img src={icon.icon} alt={icon.name} />
          </figure>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
