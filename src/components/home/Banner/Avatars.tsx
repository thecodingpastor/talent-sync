import Avatar1 from "../../../assets/images/avatar1.png";
import Avatar2 from "../../../assets/images/avatar2.png";
import Avatar3 from "../../../assets/images/avatar3.png";
import Avatar4 from "../../../assets/images/avatar4.png";
import Avatar5 from "../../../assets/images/avatar5.png";

import classes from "./Avatars.module.scss";

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

const Avatars = () => {
  return (
    <div className={classes.Container}>
      {avatars.map((avatar, index) => (
        <figure key={index}>
          <img src={avatar} alt="Avatars" />
        </figure>
      ))}
    </div>
  );
};

export default Avatars;
