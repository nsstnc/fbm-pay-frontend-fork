import style from "./questionMark.module.css"
import appStyle from "../../../app.module.css"
import question from "../../../image/questionMark.svg"
import Divider from "../../divider/Divider.jsx"
import arrowBlack from "../../../image/arrow-left-black.svg"
// eslint-disable-next-line react/prop-types
const QuestionMarkTable = ({ text = "", position = "" }) => {
  return (
    <div className={style.question}>
      <div className={style.img}>
        <img
          alt="Question mark"
          src={question}
          className={`question-point q-img`}
          style={{ height: "1.6rem" }}
        />
      </div>

      <div className={`${style.hint} ${style.hint2}`} style={{ width: "18vw" }}>
        <div className={`${position} ${style.text} ${appStyle.smallerText}`}>
          <div className={style.cardContents}>
            <img
              className={style.arrow_black}
              src={arrowBlack}
              alt="arrow black"
            />
            <h3 style={{ marginBottom: ".5rem" }}>Card Prices </h3>
            <div className={style.cardContent}>
              <div className={`flex ${style.card}`} style={{ gap: "0 20%" }}>
                <p>4.5€</p>
                <p className={appStyle.mainText}>from 1 to 5 cards</p>{" "}
              </div>
            </div>

            <div className={style.cardContent}>
              <div className={`flex ${style.card}`} style={{ gap: "0 20%" }}>
                {" "}
                <p>3.5€</p>
                <p className={appStyle.mainText}>from 6 to 9 cards</p>{" "}
              </div>
            </div>

            <div className={style.cardContent}>
              <div className={`flex ${style.card}`} style={{ gap: "0 20%" }}>
                <p>2.5€</p>
                <p className={appStyle.mainText}>from 10 cards</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={style.triangle}></div>
      </div>
    </div>
  )
}

export default QuestionMarkTable
