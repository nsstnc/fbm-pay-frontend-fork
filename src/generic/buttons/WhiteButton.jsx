import style from './whiteButton.module.css'
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const WhiteButton = ({text, link = '', img = <></>}) => {
  return (
    <Link to={link} className={style.button}>
      <button className={style.innerButton}>
        {text}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 1.75C12.4142 1.75 12.75 2.08579 12.75 2.5V16.0889C12.8365 16.0388 12.9192 15.9795 12.9965 15.9107L18.2517 11.2394C18.5613 10.9643 19.0354 10.9921 19.3106 11.3017C19.5857 11.6113 19.5579 12.0854 19.2483 12.3606L13.9931 17.0318C12.8564 18.0422 11.1436 18.0422 10.0069 17.0318L4.75174 12.3606C4.44215 12.0854 4.41426 11.6113 4.68945 11.3017C4.96464 10.9921 5.4387 10.9643 5.74828 11.2394L11.0035 15.9107C11.0808 15.9795 11.1635 16.0388 11.25 16.0889V2.5C11.25 2.08579 11.5858 1.75 12 1.75Z" fill="#232323"/>
<path d="M2.75 21C2.75 20.5858 3.08579 20.25 3.5 20.25H20.5C20.9142 20.25 21.25 20.5858 21.25 21C21.25 21.4142 20.9142 21.75 20.5 21.75H3.5C3.08579 21.75 2.75 21.4142 2.75 21Z" fill="#232323"/>
</svg>
      </button>     </Link>
  )
}

export default WhiteButton