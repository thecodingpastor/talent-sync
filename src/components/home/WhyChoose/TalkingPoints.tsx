import Video from "../../../assets/icons/video-recorder.svg";
import Recording from "../../../assets/icons/recording.svg";
import Calendar from "../../../assets/icons/calendar.svg";
import Lock from "../../../assets/icons/lock.svg";

import classes from "./TalkingPoints.module.scss";

const data = [
  {
    icons: Video,
    title: "Crystal-clear HD video",
    info: "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
  },
  {
    icons: Recording,
    title: "Noise-canceling audio",
    info: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    icons: Calendar,
    title: "Scheduling made easy",
    info: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    icons: Lock,
    title: "Bank-grade security",
    info: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

const TalkingPoints = () => {
  return (
    <div className={classes.Container}>
      {data.map((item) => (
        <div key={item.title}>
          <figure>
            <img src={item.icons} alt={item.title} />
          </figure>
          <h3>{item.title}</h3>
          <p>{item.info}</p>
        </div>
      ))}
    </div>
  );
};

export default TalkingPoints;
