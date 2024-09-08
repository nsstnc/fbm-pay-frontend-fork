import HeaderItem from "./HeaderItem.jsx";
import style from './headerItems.module.css'

// eslint-disable-next-line react/prop-types
const HeaderItems = ({texts = [], links}) => {

  const arr = []
  for (let i = 0; i < texts.length; i++) {
    arr.push(
      <HeaderItem text={texts[i]} link={links[i]}/>
    )
  }

  return (
    <div className={style.headerItems}>
      {arr}
    </div>
  )
}

export default HeaderItems