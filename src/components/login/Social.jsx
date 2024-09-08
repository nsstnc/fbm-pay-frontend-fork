import style from "../../style/social.module.css"

// eslint-disable-next-line react/prop-types
const Social = ({ img, text }) => {
  return (
    <div className={style.social}>
      <img alt="Social icon" src={img} />
      <p>{text}</p>
    </div>
  )
}

export default Social
