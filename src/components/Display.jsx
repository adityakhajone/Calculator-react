import css from "../styles/Display.module.css";
const Display = ({ displayValue }) => {
  return <input type="text" id={css.display} readOnly value={displayValue} />;
};
export default Display;
