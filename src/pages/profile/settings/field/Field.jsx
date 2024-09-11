import style from "./field.module.css"
import appStyle from "../../../../app.module.css"

// eslint-disable-next-line react/prop-types
const Field = ({ title = "", subTitle = "", value = <></> }) => {
  return (
    <div className={style.field}>
      {/* <div> */}

      <p className={`${appStyle.titleText} ${style.titleText}`}>{title}</p>
      <p className={appStyle.smallerText}>{subTitle}</p>

      {/* </div> */}

      <div className={style.value}>
        {/* <div> */}
        {value}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Field
