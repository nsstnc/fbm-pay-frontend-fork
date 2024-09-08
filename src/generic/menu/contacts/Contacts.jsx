import Contact from "./Contact.jsx"
import Ivan from "../../../image/contacts/Ivan.svg"
import fbmpay from "../../../image/contacts/fbmpay.svg"
import fbmpaynews from "../../../image/contacts/fbmpaynews.svg"
import tgIcon from "../../../image/tgIcon.svg"
import style from "./contacts.module.css"

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <Contact
        img={Ivan}
        title="Ivan"
        link="https://t.me/v_astanin"
        hint="@ivan2454"
        text="Your Manager"
        subimg={tgIcon}
      />
      <Contact
        img={fbmpay}
        title="[FBM] PAY"
        link="https://t.me/v_astanin"
        hint="@fbm_pay"
        text="TG Channel"
        subimg={tgIcon}
      />
      <Contact
        img={fbmpaynews}
        title="[FBM] PAY News"
        link="https://t.me/v_astanin"
      />
    </div>
  )
}

export default Contacts
