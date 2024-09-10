import css from "../styles/Buttons.module.css";
const Buttons = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "/",
    "*",
    ".",
    "0",
    "=",
  ];
  return (
    <div className={css.square}>
      {buttonNames.map((buttonName) => (
        <button
          id={css.button}
          key={buttonName}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
