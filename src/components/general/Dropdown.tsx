import ActionButton from "./ActionButton";
import classes from "./Dropdown.module.scss";

const Dropdown = () => {
  return (
    <aside className={classes.Container}>
      <ul>
        <li>Products</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
        <ActionButton className={classes.Btn}>Talk to sale</ActionButton>
        <ActionButton className={classes.Btn} color="blue">
          Sign up for free
        </ActionButton>
      </ul>
    </aside>
  );
};

export default Dropdown;
