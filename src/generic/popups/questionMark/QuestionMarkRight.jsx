import style from './questionMarkRight.module.css'
import appStyle from '../../../app.module.css'
import question from '../../../image/questionMark.svg'

// eslint-disable-next-line react/prop-types
const QuestionMark = ({text = '', position = ''}) => {
  return (
    <div className={style.question} >
      <div className={style.img}>
        <img alt="Question mark" src={question} className={`question-point q-img`} style={{height: "1.6rem"}} />
      </div>

      <div className={style.hint}>
        <div className={`${position} ${style.text} ${appStyle.smallerText}`}>
          {text}
        </div>
        <div className={style.triangle}></div>
      </div>
    </div>
  )
}

export default QuestionMark
