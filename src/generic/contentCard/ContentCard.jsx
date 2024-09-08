import style from "./contentCard.module.css"

// eslint-disable-next-line no-unused-vars,react/prop-types
const ContentCard = ({
  loading,
  preload,
  title,
  content = "",
  className = "",
}) => {
  return (
    <div
      className={`${className} ${style.contentCard} ${
        preload ? style.preload : ""
      }`}
    >
      <div className={loading ? style.spinner_block : ""}></div>
      <div className={style.cards}>
        {title}
        {content}
      </div>
    </div>
  )
}

export default ContentCard
