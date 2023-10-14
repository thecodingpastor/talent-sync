import classes from "./ActionButton.module.scss";

interface IProps {
  children: React.ReactNode;
  color?: "white" | "blue";
}
const ActionButton: React.FC<IProps> = ({ children, color = "white" }) => {
  return (
    <span
      className={`${classes.Container} ${
        color === "white" ? classes.White : classes.Blue
      }`}
    >
      {children}
    </span>
  );
};

export default ActionButton;
