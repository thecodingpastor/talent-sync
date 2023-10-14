import Recording from "../../../assets/icons/recording.svg";
import Video from "../../../assets/icons/video-recorder.svg";
import Monitor from "../../../assets/icons/monitor.svg";
import Mic from "../../../assets/icons/mic.svg";
import Smile from "../../../assets/icons/smile.svg";
import Message from "../../../assets/icons/message.svg";
import Setting from "../../../assets/icons/settings.svg";
import Group from "../../../assets/svgs/group.svg";

import classes from "./Right.module.scss";

const icons = [Recording, Video, Monitor, Mic, Smile, Message, Setting];

const Right = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Inner}>
        <figure>
          <img src={Group} alt="Group" />
        </figure>
      </div>
      <div className={classes.Icons}>
        {icons.map((icon, index) => (
          <figure key={index} className={classes.Icon}>
            <img src={icon} alt="Icon" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Right;
