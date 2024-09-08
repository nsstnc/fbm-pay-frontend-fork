import style from "./buttons.module.css";
import BlackButton from "../../buttons/BlackButton.jsx";
import WhiteButtonCancel from "../../buttons/WhiteButtonBack.jsx";

const Buttons = ({ onApply, onCancel }) => {
  return (
    <div className={style.buttons}>
      <div className={style.button}>
        <BlackButton text="Apply" onClick={onApply} />
      </div>
      <div className={style.button}>
        <WhiteButtonCancel text="Cancel" onClick={onCancel} />
      </div>
    </div>
  );
};

export default Buttons;