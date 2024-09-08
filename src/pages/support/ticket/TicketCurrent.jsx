import appStyle from "../../../app.module.css";
import Menu from "../../../generic/menu/Menu.jsx";
import Footer from "../../../generic/footer/Footer.jsx";

const TicketCurrent = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Help & Support</h1>
        <div></div>

        <Footer/>
      </div>
    </div>
  )
}

export default TicketCurrent