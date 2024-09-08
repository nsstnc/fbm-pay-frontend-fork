import style from "./inputs.module.css";
import Buttons from "../buttonsFilter/buttons.jsx";

// eslint-disable-next-line react/prop-types
const Inputs = ({ inputs = [], onApply, onCancel }) => {
  return (
    <div className={style.fields}>
      {inputs}
      <Buttons onApply={onApply} onCancel={onCancel} />
    </div>
  );
};

export default Inputs;
