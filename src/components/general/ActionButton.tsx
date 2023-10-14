import classes from "./ActionButton.module.scss";

interface IProps {
  children: React.ReactNode;
  color?: "white" | "blue";
  className?: string;
}
const ActionButton: React.FC<IProps> = ({
  children,
  color = "white",
  className,
}) => {
  return (
    <span
      className={`${classes.Container} ${
        color === "white" ? classes.White : classes.Blue
      } ${className || ""}`}
    >
      {children}
    </span>
  );
};

export default ActionButton;
