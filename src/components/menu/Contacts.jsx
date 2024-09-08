import Contact from './Contact.jsx'
import Ivan from '../../image/contacts/Ivan.png'
import fbmpay from '../../image/contacts/fbmpay.png'
import fbmpaynews from '../../image/contacts/fbmpaynews.png'
import tgIcon from '../../image/tgIcon.png'

const Contacts = () => {
  return (
    <div>
      <Contact img={Ivan} title="Ivan" link="https://t.me/v_astanin" hint="@ivan2454" text="Your Manager" subimg={tgIcon}/>
      <Contact img={fbmpay} title="[FBM] PAY" link="https://t.me/v_astanin" hint="@fbm_pay" text="TG Channel" subimg={tgIcon}/>
      <Contact img={fbmpaynews} title="[FBM] PAY News" link="https://t.me/v_astanin"/>
    </div>
  )
}

export default Contacts