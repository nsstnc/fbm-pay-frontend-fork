import style from "./questionMark.module.css"
import appStyle from "../../../app.module.css"
import question from "../../../image/questionMark.svg"
import arrowBlack from "../../../image/arrow-left-black.svg"
// eslint-disable-next-line react/prop-types
const QuestionMark = ({ text = "", position = "" }) => {
  return (
    <div className={style.question}>
      <div className={style.img}>
        <img
          alt="Question mark"
          src={question}
          className={`question-point q-img`}
        />
      </div>

      <div className={style.hint}>
        <img
          className={style.arrow_black__left}
          src={arrowBlack}
          alt="arrowBlack"
        />
        <div className={`${position} ${style.text} ${appStyle.smallerText}`}>
          {text}
        </div>
        <div className={style.triangle}></div>
      </div>
    </div>
  )
}

export default QuestionMark
