import style from '../../style/socialsLogin.module.css'
import HintHeader from "../../generic/HintHeader.jsx";
import Social from "./Social.jsx";

const SocialsLogin = () => {
  return (
    <div className={style.socials}>
      <HintHeader text="Under development" position="center"/>

      <div className={style.socials__items}>
        <Social img="../../public/googleIcon.png"
                text="Google"
        />
        <Social img="../../public/facebookIcon.png"
                text="Facebook"
        />
      </div>
    </div>
  )
}

export default SocialsLogin