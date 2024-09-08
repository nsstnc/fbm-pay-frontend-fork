import style from '../style/contentCard.module.css'

// eslint-disable-next-line no-unused-vars,react/prop-types
const ContentCard = ({title, content = ''}) => {

  return (
    <div className={style.contentCard}>
      {title}
      {content}
    </div>
  )
}

export default ContentCard