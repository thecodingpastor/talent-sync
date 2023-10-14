import Logo from "../general/Logo";
import PlayStore from "../../assets/svgs/playstore.svg";
import AppleStore from "../../assets/svgs/applestore.svg";
import classes from "./Conclusion.module.scss";

const data = [
  {
    name: "Products",
    items: ["Overviews", "Features", "Solutions", "Tutorials", "Pricing"],
  },
  {
    name: "Company",
    items: ["About us", "Careers", "Press", "News", "Contact"],
  },
  {
    name: "Resources",
    items: ["Blog", "Events", "Help centre", "Tutorials", "Support"],
  },
  {
    name: "Legal",
    items: ["Terms", "Privacy", "Cookies", "Licenses", "Contact"],
  },
];

const Conclusion = () => {
  return (
    <section className={classes.Container}>
      <div className={classes.First}>
        <Logo />
        <p>
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <div className={classes.Second}>
        {data.map((item) => (
          <div key={item.name}>
            <h6>{item.name}</h6>
            <ul>
              {item.items.map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={classes.Third}>
        <h5>Get the app</h5>
        <figure>
          <img src={PlayStore} alt="Play Store" />
        </figure>
        <figure>
          <img src={AppleStore} alt="Apple Store" />
        </figure>
      </div>
    </section>
  );
};

export default Conclusion;
