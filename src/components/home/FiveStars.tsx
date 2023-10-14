import Star from "../../assets/svgs/filled-star.svg";

import classes from "./FiveStars.module.scss";

interface IProps {
  className?: string;
  style?: object;
}

const FiveStars: React.FC<IProps> = ({ className, style }) => {
  return (
    <div
      className={classes.Container + " " + className || ""}
      style={style || {}}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <figure key={index}>
          <img src={Star} alt="Star" />
        </figure>
      ))}
    </div>
  );
};

export default FiveStars;
