import style from '../style/textButton.module.css'

// eslint-disable-next-line react/prop-types
const TextButton = ({text, img = <></>, link = ""}) => {
  return (
    <a href={link}>
      <button className={style.button}>
        {text}
        {img}
      </button>
    </a>
  )
}

export default TextButton