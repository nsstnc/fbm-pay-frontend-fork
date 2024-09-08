import style from './card.module.css'
import appStyle from '../../../../app.module.css'
import arrowWhite from "../../../../image/arrowWhite.svg";
import questionMarkBlack from "../../../../image/questionMarkBlack.svg";
import QuestionMark from "../../../popups/questionMark/QuestionMark.jsx";
import questionStyle from '../../../../generic/popups/questionMark/questionMark.module.css';
import './App.css';
import { Link } from 'react-router-dom';
import {CARDS_DETAILS_ROUTE} from "../../../../routing/consts.js";

// eslint-disable-next-line react/prop-types

const Card = ({ card = <></>, number = '', cardData }) => {
  return (
    <Link
      to={CARDS_DETAILS_ROUTE}
      state={{ cardData }}
    >
      <div className={style.card}>
        {card}
        <div className={style.cardNumber}>
          <p className={appStyle.mainText}>{number}</p>
          <img alt="Arrow" src={arrowWhite} />
        </div>
        <div className={style.question}>
          <QuestionMark position={questionStyle.right} text="Click to see card details" />
        </div>
      </div>
    </Link>
  );
};

export default Card